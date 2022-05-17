import React, { useEffect, useState } from "react";

import "./MainPage.css";

import { FiShuffle } from "react-icons/fi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getPhotos } from "../../Helpers/helpers";
import Carousel from "../../Components/Carousel/Carousel";

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const MainPage = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotosFromUnsplash = async () => {
    const noOfPhotos = getRandomNumber(10, 20);
    const success = await getPhotos(noOfPhotos);
    success && setPhotos(success.data);
    console.log(photos);
  };

  useEffect(() => {
    getPhotosFromUnsplash();
  }, []);

  const nextImage = () => {
    document
      .getElementById("carousel-component")
      .scrollBy({ left: 400, behavior: "smooth" });
  };

  const prevImage = () => {
    document
      .getElementById("carousel-component")
      .scrollBy({ left: -400, behavior: "smooth" });
  };

  return (
    <div className="mainpage">
      <div className="mainpage__top">
        <h1>Gallery</h1>
        <button onClick={getPhotosFromUnsplash}>
          <span>Shuffle</span>
          <FiShuffle style={{ fontWeight: "700" }} />
        </button>
      </div>
      <div className="mainpage__carousel">
        <Carousel photos={photos} />
      </div>
      <div className="mainpage__navBtns">
        <button onClick={prevImage}>
          <AiOutlineLeft style={{ fontSize: "1.2rem" }} />
        </button>
        <button onClick={nextImage}>
          <AiOutlineRight style={{ fontSize: "1.2rem" }} />
        </button>
      </div>
    </div>
  );
};

export default MainPage;
