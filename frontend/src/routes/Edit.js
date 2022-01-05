import React from "react";
import { useParams } from "react-router";
import EditForm from "../components/EditForm";

const Edit = () => {
  const { id } = useParams();
  return <EditForm id={id} />;
};

export default Edit;
