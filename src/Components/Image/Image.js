import React from "react";

import "./Image.css";

import { FiDownload } from "react-icons/fi";

const Image = (props) => {
  return (
    <div className="image">
      <div className="image__top">
        <img src={props.imageLink} alt={`${props.artistName} photo`} />
        <div className="image__bottom">
          <div className="image__bottom-left">
            <img src={props.profileImage} alt={`${props.artistName}`} />
            <div>
              <h5 style={{ fontSize: "1rem" }}>{props.artistName}</h5>
              <p
                style={{ fontSize: ".8rem" }}
              >{`${props.likes} Likes received`}</p>
            </div>
          </div>
          <div className="image__bottom-right">
            <a href={`${props.downloadLink}&force=true`}>
              <FiDownload
                style={{
                  fontSize: "1.5rem",
                  marginBottom: ".4rem",
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
