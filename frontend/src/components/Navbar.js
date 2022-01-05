import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillFileImage } from "react-icons/ai";
import Input from "./Input";

const Navbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <div className="navbar-container py-0">
            <div className="navbar-logo mx-0">
              <AiFillFileImage size={50} />
            </div>
            <div className="navbar-search my-0 py-0">
              <Input
                placeholder="Search"
                required={true}
                icon={<AiOutlineSearch size={20} />}
                onChange={(e) => {}}
                keyPressCallback={(e) => {}}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
