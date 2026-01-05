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

    // اگر همین ویدیو در حال پخشه → pause
    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
      return;
    }

    // ویدیوهای دیگه pause بشن
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });

    video.play();
    setPlayingIndex(index);
  };

  return (
    <div className="flex justify-center items-center">
      <main className="overflow-auto w-450 gap-3 flex px-3 scrollbar-hide">
        {data?.map((item: Islide, index: number) => (
          <div
            key={item.id}
            className="min-w-85 h-120 my-3 rounded-2xl overflow-hidden"
          >
            {item.imgUrl && (
              <img
                src={item.imgUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            )}

            {item.videoUrl && (
              <div className="relative h-full w-full">
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
