import React from "react";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Button from "./Button";
import { deleteImage } from "../services/ImageService";
import notify from "../utils/toast";
import { useImageContext } from "../contexts/ImageContext";

const Card = ({ id, imgName, imgUrl, onClick }) => {
  const { refreshAllImages } = useImageContext();
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={imgUrl} alt={imgName} className="card-img" onClick={onClick} />

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
