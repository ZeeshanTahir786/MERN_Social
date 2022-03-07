import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingPosts } from "../../Redux/Action";
import Post from "../Post/Post";
import User from "../User/User";
import Loader from "../Loader/Loader";
import "./Home.css";
import { Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );
  useEffect(() => {
    dispatch(getFollowingPosts());
  }, []);
  console.log("postssss", posts.length);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="homeleft">
        {posts && posts?.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post._id}
              postImage={
                "https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              }
              ownerName={"Hafiz Zeeshan"}
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
        <User
          userId={"userId"}
          name={"names"}
          avatar={"https://avatars.githubusercontent.com/u/25058652?v=4"}
        />
      </div>
    </div>
  );
};

export default Home;
