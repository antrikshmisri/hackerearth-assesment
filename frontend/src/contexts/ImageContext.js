import React, { useContext, useState, useEffect } from "react";
import { getAllImages } from "../services/ImageService";

const ImageContext = React.createContext();

export const ImageProvider = ({ children }) => {
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    refreshAllImages();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const refreshAllImages = () => {
    getAllImages().then((res) => {
      setAllImages([...res.data]);
    });
  };

  return (
    <ImageContext.Provider value={{ allImages, refreshAllImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  return useContext(ImageContext);
};
