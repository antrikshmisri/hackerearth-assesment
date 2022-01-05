import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Card from "../components/card/Card";

import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillPlusCircle,
} from "react-icons/ai";

const PaginatedComponent = ({ itemsPerPage, totalItems, components }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const offset = currentPage * itemsPerPage;
    const paginatedItems = components.slice(offset, offset + itemsPerPage);
    setItems(paginatedItems);
  }, [currentPage, itemsPerPage, components]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <>
      {items.length ? (
        items.map((item, idx) => {
          return (
            <Col lg={4} className="d-flex justify-content-center mb-3">
              <Card
                key={idx}
                imgName={item.ImgName}
                imgUrl={item.ImgUrl}
                id={item._id}
                onClick={() => navigate(`/show/${item._id}`)}
              />
            </Col>
          );
        })
      ) : (
        <Container
          fluid
          style={{ height: "88vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <h1 className="text-center" style={{ opacity: "0.4" }}>
            No Images, Please add some {<AiFillPlusCircle />}
          </h1>
        </Container>
      )}
      <ReactPaginate
        previousLabel={<AiOutlineArrowLeft size={30} />}
        nextLabel={<AiOutlineArrowRight size={30} />}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(totalItems / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        previousClassName={"previous"}
        nextClassName={"next"}
        pageClassName={"page-item"}
      />
    </>
  );
};

export default PaginatedComponent;
