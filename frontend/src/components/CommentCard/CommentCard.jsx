import { Delete } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./CommentCard.css";

const CommentCard = ({ userId, name, avatar, comment, commentId, postId }) => {
  return (
    <div className="commentUser">
      <Link to={`/user/${userId}`}>
        <img src={avatar} alt={name} />
        <Typography style={{ minWidth: "6vmax" }}>{name}</Typography>
      </Link>
      <Typography>{comment}</Typography>
      <Button>
        <Delete />
      </Button>
    </div>
  );
};

export default CommentCard;
