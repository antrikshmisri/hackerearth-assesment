import React from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import FloatingButton from "../components/FloatingButton";
import { useImageContext } from "../contexts/ImageContext";
import PaginatedComponent from "../components/PaginatedComponent";

const Home = () => {
  const { allImages } = useImageContext();
  const navigate = useNavigate();

  return (
    <>
      <Container fluid>
        <Row className="card-container">
          <PaginatedComponent
            itemsPerPage={9}
            totalItems={allImages.length}
            components={allImages}
          />
        </Row>
      </Container>
      <FloatingButton
        icon={<AiOutlinePlus size={30} />}
        onClick={() => navigate("/new")}
        color="#4264ED"
      />
    </>
  );
};

export default Home;
