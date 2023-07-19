import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const Title = (props) => {
  return <div>{props.title}</div>;
};
