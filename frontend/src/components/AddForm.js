import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { postImage } from "../services/ImageService";
import notify from "../utils/toast";
import { AiFillPlusCircle, AiFillBackward } from "react-icons/ai";
import Input from "./Input";
import Button from "./Button";
import { useImageContext } from "../contexts/ImageContext";

const AddForm = () => {
  const [inputs, setInputs] = useState({
    ImgName: "",
    ImgUrl: "",
    ImgDetails: "",
  });
  const { refreshAllImages } = useImageContext();

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
            <h1 className="text-center">Adding New Image</h1>
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
              icon={<AiFillPlusCircle />}
              color="#3399ff"
              onClick={() => {
                if (
                  inputs.ImgDetails === "" ||
                  inputs.ImgName === "" ||
                  inputs.ImgUrl === ""
                ) {
                  notify("Please fill all the fields", "error");
                } else {
                  postImage(inputs).then((res) => {
                    if (res.message.includes("success")) {
                      refreshAllImages();
                      notify("Image added successfully", "success");
                      navigate("/");
                    } else {
                      notify("Error adding image", "error");
                    }
                  });
                }
              }}
              text={"Add"}
            />
            <Button
              icon={<AiFillBackward />}
              color="#3399ff"
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

export default AddForm;
