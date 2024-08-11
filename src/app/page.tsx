"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import getSignature from "./_action";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  const { data, status } = useSession();
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setUploading(true);
    setVideoPreviewUrl(URL.createObjectURL(file));

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

  const date = 1000000

  return (
    <main className="m-2 bg-[#0f0f0f] text-white">
      <div>Home</div>
      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Log Out</button>
      <p>Name:{data?.user.name}</p>
      <p>Email:{data?.user.email}</p>
      <p>{status}</p>
      <form className="m-2">
        <input type="file" accept="video/*" onChange={handleUpload} />
        {videoPreviewUrl && (
          <div>
            <p>Video Preview:</p>
            <video src={videoPreviewUrl} controls width="400" />
          </div>
        )}
        {uploading && (
          <div>
            <p>Uploading: {uploadProgress.toFixed(2)}%</p>
            <progress value={uploadProgress} max="100"></progress>
          </div>
        )}
        {uploadedUrl && <p>Uploaded URL: {uploadedUrl}</p>}
        <video
          src="https://res.cloudinary.com/dz1zuoloq/video/upload/f_auto:video,q_auto/v1/videos/cohdx9yfaxpjvp8aoge4"
          controls={true}
        ></video> 
      </form>
      <div className="grid grid-flow-row auto-col-[320px] auto-row-[320px] grid-cols-auto">
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
        <VideoCard
          title="Learn Drizzle In 60 Minutes"
          channel="Web Dev Simplified"
          logo="/unnamed.jpg"
          thumbnail="/default.webp"
          time={new Date(date)}
          views={56}
        ></VideoCard>
      </div>
    </main>
  );
}
