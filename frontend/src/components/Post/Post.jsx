import {
  ChatBubbleOutline,
  DeleteOutline,
  Favorite,
  FavoriteBorder,
  MoreVert,
} from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFollowingPosts, likePost } from "../../Redux/Action";
import "./Post.css";

const Post = ({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  ownerImage,
  ownerName,
  ownerId,
  isDeleted = false,
  isAccount = false,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLike = async () => {
    setIsLiked(!isLiked);

    await dispatch(likePost(postId));
    if (isAccount) {
      console.log("bring my posts");
    } else {
      dispatch(getFollowingPosts());
    }
  };

  useEffect(() => {
    likes.forEach((like) => {
      if (like._id === user._id) {
        setIsLiked(true);
      }
    });
  }, [likes, user._id]);

  return (
    <div className="post">
      <div className="postHeader">
        {isAccount ? (
          <Button>
            <MoreVert />
          </Button>
        ) : null}
      </div>
      <img src={postImage} alt="post" />
      <div className="postDetails">
        <Avatar
          src={ownerImage}
          alt="User"
          sx={{ height: "3vmax", width: "3vmax" }}
        />
        <Link to={`/user/${ownerId}`}>
          <Typography fontWeight={700}>{ownerName}</Typography>
        </Link>
        <Typography
          fontWeight={100}
          color="rgba(0,0,0,0.582)"
          style={{ alignSelf: "center" }}
        >
          {caption}
        </Typography>
      </div>
      <button
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          margin: "1vmax 2vmax",
        }}
      >
        <Typography>{`${likes.length} Likes`}</Typography>
      </button>
      <div className="postfooter">
        <Button onClick={handleLike}>
          {isLiked ? <Favorite style={{ color: "red" }} /> : <FavoriteBorder />}
        </Button>
        <Button>
          <ChatBubbleOutline />
        </Button>
        {isDeleted ? (
          <Button>
            <DeleteOutline />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
