import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { updateImage } from "../services/ImageService";
import notify from "../utils/toast";
import { AiFillSave, AiFillBackward } from "react-icons/ai";
import Input from "./Input";
import Button from "./Button";
import { useImageContext } from "../contexts/ImageContext";
import { getImageById } from "../services/ImageService";

const EditForm = ({ id }) => {
  const { refreshAllImages } = useImageContext();
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getImageById(id).then((res) => setInputs(res.data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="px-0 py-0 d-flex align-items-center justify-content-center"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >
      <Container className="form-container">
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="text-center">Editing Image</h1>
          </Col>
          <Col lg={12}>
            <Input
              value={inputs.ImgName}
              onChange={(e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  ImgName: e.target.value,
                }));
              }}
              placeholder="Image Name"
              required={true}
            />
          </Col>
          <Col lg={12}>
            <Input
              value={inputs.ImgUrl}
              onChange={(e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  ImgUrl: e.target.value,
                }));
              }}
              placeholder="Image URL"
              required={true}
            />
          </Col>
          <Col lg={12}>
            <Input
              value={inputs.ImgDetails}
              onChange={(e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  ImgDetails: e.target.value,
                }));
              }}
              placeholder="Image Details"
              required={true}
            />
          </Col>
          <Col lg={12} className="d-flex justify-content-center mt-4">
            <Button
              icon={<AiFillSave />}
              color="#42EDCB"
              onClick={() => {
                if (
                  inputs.ImgDetails === "" ||
                  inputs.ImgUrl === "" ||
                  inputs.ImgName === ""
                ) {
                  notify("Please fill all the fields", "error");
                } else {
                  updateImage(id, inputs).then((res) => {
                    if (res.message.includes("success")) {
                      refreshAllImages();
                      notify("Image updated successfully", "success");
                      navigate("/");
                    } else {
                      notify("Error updating image", "error");
                    }
                  });
                }
              }}
              text={"Save"}
            />
            <Button
              icon={<AiFillBackward />}
              color="#ED4264"
              onClick={() => {
                navigate(-1);
              }}
              text="Back"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default EditForm;
