import React from "react";
import Image from "../Image/Image";

import "./Carousel.css";

const Carousel = ({ photos }) => {
  console.log(photos);
  return (
    <div className="carousel" id="carousel-component">
      {photos.map((item, index) => (
        <Image
          key={index}
          artistName={item?.user?.name}
          likes={item?.likes}
          imageLink={item?.urls?.thumb}
          profileImage={item?.user?.profile_image?.medium}
          downloadLink={item?.links?.download}
        />
      ))}
    </div>
  );
};

export default Carousel;
