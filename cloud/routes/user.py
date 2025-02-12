# from fastapi import APIRouter,Query,HTTPException
# import boto3
# # from keys import ACCESS_KEY_ID,SECRET_ACCESS_KEY
# from enum import Enum
# from typing import Optional
# from boto3.dynamodb.conditions import Key
# from models.user import address
# import uuid
from fastapi import FastAPI,APIRouter
import os
import zipfile
import requests
# from dotenv import load_dotenv

router = APIRouter() 

# load_dotenv()

NETLIFY_API = "https://api.netlify.com/api/v1"
NETLIFY_AUTH_TOKEN = "nfp_t95FeMGT3C4qimVZDupyqs2jUuMjemMp207a"
HEADERS = {"Authorization": f"Bearer {NETLIFY_AUTH_TOKEN}"}


def zip_build_folder():
    zip_path = "build.zip"
    build_folder = "build"

    if os.path.exists(zip_path):
        os.remove(zip_path)

    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, _, files in os.walk(build_folder):
            for file in files:
                zipf.write(os.path.join(root, file), os.path.relpath(os.path.join(root, file), build_folder))

    return zip_path


@router.post("/deploy")
async def deploy_site():
    try:
        zip_path = zip_build_folder()

        print("🚀 Creating a new Netlify site...")
        site_response = requests.post(f"{NETLIFY_API}/sites", headers=HEADERS)
        site_data = site_response.json()

        if "id" not in site_data:
            return {"success": False, "error": "Failed to create site", "details": site_data}

        site_id = site_data["id"]
        site_url = site_data["url"]

        print(f"✅ Site created: {site_url}")

        print("🔼 Uploading build.zip...")
        with open(zip_path, 'rb') as zip_file:
            deploy_response = requests.post(
                f"{NETLIFY_API}/sites/{site_id}/deploys",
                headers={**HEADERS, "Content-Type": "application/zip"},
                files={"file": zip_file},
            )

        if deploy_response.status_code != 200:
            return {"success": False, "error": "Deployment failed", "details": deploy_response.json()}

        print(f"🎉 Deployment successful! {site_url}")
        return {"success": True, "netlify_url": site_url}

    except Exception as e:
        return {"success": False, "error": str(e)}


    


