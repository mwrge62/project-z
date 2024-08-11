import React from "react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  logo: string;
  channel: string;
  views: number;
  time: Date;
}

const VideoCard = ({
  title,
  thumbnail,
  logo,
  channel,
  views,
  time,
}: VideoCardProps) => {
  return (
    <div className="flex-grow-[1] flex flex-col justify-center bg-[#0f0f0f] text-white min-w-[320px]">
      <div
        className="w-full aspect-video bg-[#222222] rounded-lg"
        style={{
          background: `url("${thumbnail}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex h-[100px] sm:max-h-[100px] mt-3">
        <div className="flex justify-center h-full">
          <div
            className="w-[36px] h-[36px] aspect-square rounded-full m-2"
            style={{
              background: `url("${logo}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold max-w-[300px]">
            {title.length > 50 ? `${title.substring(0, 50)}...` : title}
          </div>
          <div className="text-[0.9rem] text-[#aaaaaa]">{channel}</div>
          <div className="text-[0.9rem] text-[#aaaaaa]">
            {`${views} Views • ${time} ago`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
