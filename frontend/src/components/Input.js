import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Input = ({
  icon,
  value,
  placeholder,
  onChange,
  onPaste,
  required,
  label,
  keyPressCallback = () => {},
}) => {
  return (
    <Container className="px-0 py-0">
      <Row>
        <Col lg={12} className="d-flex justify-content-center">
          <p style={{ fontWeight: "500" }}>{label}</p>
          {icon ? <span className="input-icon-div">{icon}</span> : null}
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              onChange(e);
              keyPressCallback(e);
            }}
            required={required}
          ></input>
        </Col>
      </Row>
    </Container>
  );
};

export default Input;
