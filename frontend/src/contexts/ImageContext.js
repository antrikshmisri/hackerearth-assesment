import React, { useContext, useState, useEffect } from "react";
import { getAllImages } from "../services/ImageService";

const ImageContext = React.createContext();

export const ImageProvider = ({ children }) => {
  const [allImages, setAllImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshAllImages();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const refreshAllImages = () => {
    setIsLoading(true);
    getAllImages().then((res) => {
      setAllImages([...res.data]);
      setIsLoading(false);
    });
  };

  return (
    <ImageContext.Provider value={{ allImages, refreshAllImages, isLoading }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  return useContext(ImageContext);
};
