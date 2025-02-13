import os
import shutil
import zipfile
from fastapi import FastAPI, HTTPException
import requests
from pathlib import Path
# from dotenv import load_dotenv

# load_dotenv()

NETLIFY_API = "https://api.netlify.com/api/v1"
AUTH_HEADER = {'Authorization': f'Bearer {"nfp_t95FeMGT3C4qimVZDupyqs2jUuMjemMp207a"}'}

app = FastAPI()

# 🚀 1. Zip the Build Folder
def zip_build_folder():
    print("📦 Zipping build folder...")
    build_path = Path(__file__).parent / "build"
    zip_path = Path(__file__).parent / "build.zip"
    
    if not build_path.exists():
        raise HTTPException(status_code=404, detail="Build folder not found.")
    
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(build_path):
            for file in files:
                file_path = Path(root) / file
                zipf.write(file_path, arcname=file_path.relative_to(build_path))
    
    return zip_path

# 🚀 2. Deploy to Netlify
@app.post("/deploy")
def deploy_to_netlify():
    try:
        zip_path = zip_build_folder()
        
        print("🚀 Creating a new Netlify site...")
        site_response = requests.post(f"{NETLIFY_API}/sites", headers=AUTH_HEADER)
        site_response.raise_for_status()  # Check if request was successful
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
            deploy_response.raise_for_status()  # Check if request was successful
            deploy = deploy_response.json()
        
        return {"message": "Deployment successful!", "url": site["url"]}
    
    except requests.exceptions.RequestException as e:
        error_message = str(e)
        if e.response is not None:
            error_message = e.response.text
        raise HTTPException(status_code=400, detail=f"❌ Deployment Failed: {error_message}")

# 🚀 Run the FastAPI app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
