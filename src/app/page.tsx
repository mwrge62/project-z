"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import getSignature from "./_action";

export default function Home() {
  const { data, status } = useSession();
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setUploading(true);
    console.log("run");

    try {
      const { timestamp, signature } = await getSignature();

      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
      formData.append("timestamp", timestamp.toString());
      formData.append("signature", signature);
      formData.append("folder", "videos");

      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload`,
        true
      );

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          setUploadProgress(progress);
        }
      };

      xhr.onload = () => {
        setUploading(false);
        if (xhr.status === 200) {
          const uploadResult = JSON.parse(xhr.responseText);
          setUploadedUrl(uploadResult.secure_url);
        } else {
          console.error("Error uploading file:", xhr.statusText);
        }
      };

      xhr.onerror = () => {
        setUploading(false);
        console.error("Error uploading file:", xhr.statusText);
      };

      xhr.send(formData);
    } catch (error) {
      setUploading(false);
      console.error("Error uploading file:", error);
    }
  };

  return (
    <main className="m-2">
      <div>Home</div>
      <button onClick={() => signIn("google")}>Login</button>
      <button onClick={() => signOut()}>Log Out</button>
      <p>{data?.user.name}</p>
      <p>{data?.user.email}</p>
      <p>{status}</p>
      <form className="m-2">
        <input type="file" accept="video/*" onChange={handleUpload} />
        {uploading && (
          <div>
            <p>Uploading: {uploadProgress.toFixed(2)}%</p>
            <progress value={uploadProgress} max="100"></progress>
          </div>
        )}
        {uploadedUrl && <p>Uploaded URL: {uploadedUrl}</p>}
      </form>
    </main>
  );
}
