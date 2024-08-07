"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import getSignature from "./_action";

export default function Home() {
  const { data, status } = useSession();
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setUploading(true);

    try {
      const { timestamp, signature } = await getSignature();

      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
      formData.append("timestamp", timestamp.toString());
      formData.append("signature", signature);
      formData.append("folder", "videos");

      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadResult = await uploadResponse.json();
      setUploadedUrl(uploadResult.secure_url);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
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
        {uploading && <p>Uploading...</p>}
        {uploadedUrl && <p>Uploaded URL: {uploadedUrl}</p>}
      </form>
    </main>
  );
}
