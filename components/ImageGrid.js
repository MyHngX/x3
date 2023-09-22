import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import { imageListData } from "./images";
import style from "./style.module.scss";
import Nav from "./Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";

function SkeletonLoader() {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={200}
      viewBox="0 0 200 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="200" height="200" />
    </ContentLoader>
  );
}

function GridImageDisplay() {
  const [searchVal, setValue] = useState("");
  const [images, setImages] = useState(imageListData);

  useEffect(() => {
    AOS.init();
  }, []);

  function handleDragStart(e, index) {
    e.dataTransfer.setData("text/plain", index.toString());
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDragEnter(e) {
    e.preventDefault();
  }

  function handleDragLeave(e) {
    e.preventDefault();
  }

  function handleDrop(e, newIndex) {
    e.preventDefault();
    const startIndex = parseInt(e.dataTransfer.getData("text/plain"));
    const newImages = [...images];
    const [draggedImage] = newImages.splice(startIndex, 1);
    newImages.splice(newIndex, 0, draggedImage);
    setImages(newImages);
  }

  useEffect(() => {
    const filteredItems = imageListData.filter((item) =>
      item.tag.includes(searchVal)
    );
    setImages(filteredItems);
  }, [searchVal]);

  return (
    <>
      <Nav searchVal={searchVal} setValue={setValue} />
      {images.length == 0 ? (
        <Modal
          text={
            "No matching images found"
          }
          extra="Available tags: 'Gray', 'Purple', 'Dark'."
          btnVal={"Clear"}
          handleClick={() => setValue("")}
        />
      ) : (
        <div className={style.gridContainer}>
          {images.map((imageUrl, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className={style.gridItem}
              draggable={true}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e)}
              onDragEnter={(e) => handleDragEnter(e)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(e, index)}
            >
              {/* Display skeleton loader while image is loading */}
              {!imageUrl.path ? (
                <SkeletonLoader />
              ) : (
                <img
                  src={
                    imageUrl.path ||
                    "https://res.cloudinary.com/olasumboeniola/image/upload/v1695371060/images/grey-2_cew7xi.jpg"
                  }
                  alt={`Image ${imageUrl.tag}`}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default GridImageDisplay;
