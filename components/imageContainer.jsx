import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const ImageContainer = ({ filteredImages, type }) => {
  return (
    <SRLWrapper>
      <div className="container">
        {filteredImages.map((media) => (
          <div className="image-card" key={media.id}>
            <a href={media.media_url}>
              {(type === "all" || type === "image") &&
                media.type === "image" && (
                  <img className={"image"} src={media.media_url}></img>
                )}
              {(type === "all" || type === "video") &&
                media.type === "video" && (
                  <video
                    className="image"
                    controls
                    autoP
                    lay
                    src={media.media_url}
                  ></video>
                )}
            </a>
          </div>
        ))}
      </div>
    </SRLWrapper>
  );
};

export default ImageContainer;
