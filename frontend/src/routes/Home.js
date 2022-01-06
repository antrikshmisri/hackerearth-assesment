import React from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import FloatingButton from "../components/FloatingButton";
import { useImageContext } from "../contexts/ImageContext";
import PaginatedComponent from "../components/PaginatedComponent";
import HashLoader from "react-spinners/HashLoader";

const Home = () => {
  const { allImages, isLoading } = useImageContext();
  const navigate = useNavigate();

  return (
    <>
      <Container fluid>
        <Row className="card-container">
          <div className={isLoading ? "loading-overlay" : ""}>
            <HashLoader loading={isLoading} color="#ED4264" />
          </div>
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
