"use client";

// =============== Material IU Icons ===============

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import useDesktopSlider from "@/services/Slider/Desktop-slider/hook";
import { useState } from "react";

function DesktopSlider() {
  const { data = [], isLoading, isRefetching, error } = useDesktopSlider();

  let [count, setCount] = useState(0);
  const slide = data[count];
  let [nextImg, setNextImg] = useState<number>(0);
  const [nextSlide, setNextSlide] = useState<boolean>(false);
  const [prevSlide, setPrevSlide] = useState<boolean>(false);

  if (!slide) return null;

  const HandleNextSlide = () => {
    setNextImg(nextImg <= 2 ? (nextImg += 1) : (nextImg = 0));

    setNextSlide(true);

    setTimeout(() => {
      setCount(count <= 2 ? (count += 1) : (count = 0));
      setNextSlide(false);
    }, 1000);
  };

  const HandlePreviosSlide = () => {
    setCount(count >= 1 ? (count -= 1) : (count = data.length - 1));
    setNextImg(nextImg >= 2 ? (nextImg -= 1) : (nextImg = 0));

    setPrevSlide(true);

    setTimeout(() => {
      setPrevSlide(false);
    }, 1000);
  };

  return (
    <main className="hidden xl:block">
      <div className="container w-full m-auto overflow-auto scrollbar-hide relative flex justify-between items-center">
        <div className="w-full flex justify-between items-center z-20 absolute left-0 right-0 top-28 px-5">
          <div onClick={HandlePreviosSlide}>
            <ArrowBackIosIcon fontSize="large" className="cursor-pointer" />
          </div>

          <div onClick={HandleNextSlide}>
            <ArrowForwardIosIcon fontSize="large" className="cursor-pointer" />
          </div>
        </div>

        <img
          src={slide?.imgUrl}
          alt="slide img"
          className={`transition-transform duration-600 ease-in-out ${
            nextSlide ? "opacity-0" : "opacity-100"
          }`}
        />

        <img
          src={data[nextImg].imgUrl}
          className={`transition-transform duration-600 ease-in-out ${
            nextSlide ? "-translate-x-full" : "translate-x-full opacity-0"
          }`}
        />

        <div className="absolute top-90 left-0 right-0 bottom-0 bg-linear-to-b from-black/0 to-white"></div>
      </div>
    </main>
  );
}

export default DesktopSlider;
