"use client";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import useSlider from "@/services/Slider/hook";
import { Islide } from "@/services/Slider/types";
import { useRef, useState } from "react";

function Slider() {
  const { data } = useSlider();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
      return;
    }

    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });

    video.play();
    setPlayingIndex(index);
  };

  return (
    <div className="flex justify-center items-center">
      <main className="overflow-auto w-450 gap-3 flex px-3 scrollbar-hide xl:hidden">
        {data?.map((item: Islide, index: number) => (
          <div
            key={item.id}
            className="min-w-72 h-120 my-3 rounded-2xl overflow-hidden"
          >
            {item.imgUrl && (
              <div className="relative h-full w-full">
                <p className="absolute top-5 left-5 w-50 font-bold text-3xl">
                  {item.content}
                </p>
                <img
                  src={item.imgUrl}
                  alt=""
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            )}

            {item.videoUrl && (
              <div className="relative h-full w-full">
                <div className="absolute top-5 left-5">
                  <h2>{item.title}</h2>
                  <p className="font-bold text-3xl w-60">{item.content}</p>
                </div>

                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.videoUrl}
                  className="h-full w-full object-cover"
                  playsInline
                  muted
                />

                <button
                  onClick={() => togglePlay(index)}
                  className="absolute bottom-2 left-2 bg-black/90 text-white p-1 rounded-full"
                >
                  {playingIndex === index ? <PauseIcon /> : <PlayArrowIcon />}
                </button>
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

export default Slider;
