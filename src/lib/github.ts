interface ReleaseData {
  version: string;
  downloadUrl: string;
  size: string;
}

const FALLBACK_DATA: ReleaseData = {
  version: "v1.9.3",
  downloadUrl: "https://github.com/workbhaveshpandey-create/kreoassist/releases/download/v1.9.3/app-release.apk",
  size: "40.4 MB",
};

export async function getLatestRelease(): Promise<ReleaseData> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/workbhaveshpandey-create/kreoassist/releases/latest"
    );
    
    if (!response.ok) throw new Error("API Error");
    
    const data = await response.json();
    
    const apkAsset = data.assets.find((asset: any) => asset.name.endsWith(".apk"));
    
    if (!apkAsset) throw new Error("No APK found");

    return {
      version: data.tag_name, 
      downloadUrl: apkAsset.browser_download_url,
      size: (apkAsset.size / (1024 * 1024)).toFixed(1) + " MB",
    };
  } catch (error) {
    console.error("Auto-fetch failed, using fallback data", error);
    return FALLBACK_DATA;
  }
}