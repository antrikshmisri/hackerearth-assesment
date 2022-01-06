import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Button from "../button/Button";
import { deleteImage } from "../../services/ImageService";
import notify from "../../utils/toast";
import { useImageContext } from "../../contexts/ImageContext";
import MoonLoader from "react-spinners/MoonLoader";

const Card = ({ id, imgName, imgUrl, onClick }) => {
  const { refreshAllImages } = useImageContext();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  return (
    <div className="card" data-testid="card">
      {isLoading ? (
        <div className={isLoading ? "card-img-overlay" : ""}>
          <MoonLoader loading={isLoading} color="#4264ED" />
        </div>
      ) : null}
      <img
        src={imgUrl}
        alt={imgName}
        className="card-img"
        onClick={onClick}
        onLoad={() => {
          setIsLoading(false);
        }}
        style={isLoading ? { display: "none" } : { display: "block" }}
      />

      <Container className="card-btns">
        <Button
          icon={<AiFillEdit />}
          text="Edit"
          color="#4264ED"
          onClick={() => navigate(`/${id}/edit`)}
        />
        <Button
          icon={<AiFillDelete />}
          text="Delete"
          color="#ED4264"
          onClick={() => {
            deleteImage(id).then((res) => {
              if (res.message.includes("success")) {
                notify(res.message, "success");
                refreshAllImages();
                navigate("/");
              }
            });
          }}
        />
      </Container>
    </div>
  );
};

export default Card;
