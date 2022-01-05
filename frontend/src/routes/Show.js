import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Col, Row, Image } from "react-bootstrap";
import { getImageById } from "../services/ImageService";
import Button from "../components/Button";
import { AiFillBackward } from "react-icons/ai";

const Show = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getImageById(id).then((res) => setCard(res.data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container fluid className="">
      <h1 className="text-center">Currently Displaying {card.ImgName}</h1>
      <Row
        style={{ height: "87vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Col lg={12} className="page-img d-flex justify-content-center">
          <Image rounded thumbnail src={card.ImgUrl} alt={card.ImgName} />
        </Col>
        <Col lg={12} className="page-details">
          {card.ImgDetails}
        </Col>
        <Col lg={12} className="action-btns d-flex justify-content-center">
          <Button
            text="Back"
            color="#3399ff"
            onClick={() => navigate(-1)}
            icon={<AiFillBackward />}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Show;
