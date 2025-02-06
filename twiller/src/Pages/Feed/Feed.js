import React, { useEffect, useState } from "react";
import "./Feed.css";
import Posts from "./Posts/Posts";
import Tweetbox from "./Tweetbox/Tweetbox";
const Feed = () => {
  const [post, setpost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then((res) => res.json())
      .then((data) => {
        setpost(data);
      })
  }, [post]);
  //console.log(post)

  /*
   const data=[
    {
      id:"1",
      name:"Jane_doe",
      username:"@jane_doe",
      profilePhoto:"https://example.com/profiles/jane.jpg",
      post:"Exploring the  new features in javascript # coding# javascript",
      photo:"https://example.com/posts/javascript.png",
    },
    {
      id:"2",
      name:"John_Smith",
      username:"@John_Smith",
      profilePhoto:"https://example.com/profiles/jane.jpg",
      post:"Exploring the  new features in javascript # coding# javascript",
      photo:"https://example.com/posts/javascript.png",
    },
    {
      id:"3",
      name:"Alice johnson",
      username:"@Alice_johnson",
      profilePhoto:"https://example.com/profiles/jane.jpg",
      post:"Exploring the  new features in javascript # coding# javascript",
      photo:"https://example.com/posts/javascript.png",
    },
    
   ];*/
 /* useEffect(() => {
    setpost(data);
  }, []);*/

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="home">Home</h2>
      </div>
      <Tweetbox />
      {post.map((p) => (
        <Posts key={p.id} p={p} />
      ))}
    </div>
  );
};

export default Feed;
