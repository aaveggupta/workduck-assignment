import React, { useEffect, useState } from "react";

import "./MainPage.css";

import { FiShuffle } from "react-icons/fi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getPhotos, getPhotosFromSearch } from "../../Helpers/helpers";
import Carousel from "../../Components/Carousel/Carousel";

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const MainPage = () => {
  const [photos, setPhotos] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getPhotosFromUnsplash = async () => {
    const noOfPhotos = getRandomNumber(10, 20);
    setPhotos([]);
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

  const search = async () => {
    console.log(searchText);
    const noOfPhotos = getRandomNumber(10, 20);
    setPhotos([]);
    const success = await getPhotosFromSearch(noOfPhotos, searchText);
    success && setPhotos(success?.data?.results);
    setSearchText("");
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
      <div className="mainpage__search">
        <input
          type="text"
          placeholder="Search Image"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
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
