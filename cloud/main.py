from fastapi import FastAPI, HTTPException, Query
import os
import zipfile
import requests

app = FastAPI()

NETLIFY_PAT_TOKEN = "nfp_t95FeMGT3C4qimVZDupyqs2jUuMjemMp207a"
NETLIFY_API = "https://api.netlify.com/api/v1"
AUTH_HEADER = {"Authorization": f"Bearer {NETLIFY_PAT_TOKEN}"}


def zip_build_folder(build_folder_path: str):
    if not os.path.exists(build_folder_path):
        raise HTTPException(status_code=404, detail="Build folder not found.")

    print("📦 Zipping build folder...")
    zip_path = os.path.join(os.path.dirname(build_folder_path), "build.zip")
    with zipfile.ZipFile(zip_path, 'w') as zipf:
        for root, dirs, files in os.walk(build_folder_path):
            for file in files:
                zipf.write(os.path.join(root, file),
                           os.path.relpath(os.path.join(root, file), build_folder_path))
    return zip_path


@app.get("/deploy")
async def deploy_to_netlify(build_folder_path: str = Query(..., description="Path to the build folder")):
    try:
        zip_path = zip_build_folder(build_folder_path)
        print(f"✅ Build folder zipped at: {zip_path}")
        print("🚀 Creating a new Netlify site...")

        site_response = requests.post(f"{NETLIFY_API}/sites", headers=AUTH_HEADER)
        site_response.raise_for_status() 
        site = site_response.json()
        
        print(f"✅ Site created: {site['url']}")
        print("🔼 Uploading build.zip...")

        with open(zip_path, "rb") as zip_file:
            headers = {
                **AUTH_HEADER,
                "Content-Type": "application/zip",
            }
            deploy_response = requests.post(
                f"{NETLIFY_API}/sites/{site['id']}/deploys", 
                headers=headers, 
                data=zip_file
            )
            deploy_response.raise_for_status()  
            deploy = deploy_response.json()
        
        return {"message": "Deployment successful!", "url": site["url"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
