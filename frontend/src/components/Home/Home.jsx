import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getFollowingPosts } from "../../Redux/Action";
import Post from "../Post/Post";
import User from "../User/User";
import Loader from "../Loader/Loader";
import "./Home.css";
import { Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollowingPosts());
    dispatch(getAllUsers());
  }, []);
  const { isLoading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );

  const { isLoading: usersLoading, users } = useSelector(
    (state) => state.allUsers
  );

  return isLoading === true || usersLoading === true ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="homeleft">
        {posts && posts?.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post._id}
              postId={post._id}
              postImage={post.image.url}
              caption={post.caption}
              likes={post.likes}
              comments={post.comments}
              ownerImage={post.owner.avatar.url}
              ownerName={post.owner.name}
              ownerId={post.owner._id}
            />
          ))
        ) : (
          <Typography variant="h6">No Posts yet</Typography>
        )}
      </div>
      <div className="homeright">
        {users && users.length > 0 ? (
          users.map((user) => (
            <User
              userId={user._id}
              name={user.name}
              avatar={"https://avatars.githubusercontent.com/u/25058652?v=4"}
              // avatar={user.avatar.url}
            />
          ))
        ) : (
          <Typography variant="h6">No Users yet</Typography>
        )}
      </div>
    </div>
  );
};

export default Home;
