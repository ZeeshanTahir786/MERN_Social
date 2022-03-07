import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";

const User = ({ userId, name, avatar }) => {
  return (
    <Link to={`/users/${userId}`} className="homeuser">
      <img src={avatar} alt={name} />
      <Typography>{name}</Typography>
    </Link>
  );
};

export default User;
