import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../../store/firebaseContext";
import Heart from "../../assets/Heart";
import "./Post.css";
import {NavLink} from 'react-router-dom'
import { collection, onSnapshot, query } from "firebase/firestore";
import { postContext } from "../../store/PostContext";
import Temp from "../Temp/Temp";

function Posts() {
  const [posts, setPosts] = useState([]);
  const { db } = useContext(FirebaseContext);
  const {setPostDetails} = useContext(postContext)
  useEffect(() => {
    const que = query(collection(db, "products"));
    const sub = onSnapshot(que, (querySnapshot) => {
      const allposts = querySnapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      console.log(allposts);
      setPosts(allposts);
    });
  }, []);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <Temp></Temp>
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards"><NavLink to="/view">
        
          {posts.map((post) => {
            return (
              <div className="card" onClick={()=>{
                setPostDetails(post)
              }}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={post.imageUrl} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {post.price}</p>
                  <p className="name">{post.name}</p>
                  <span className="kilometer">{post.category}</span>
                  
                </div>
                <div className="date">
                  <span>{post.createdAt}</span>
                </div>
              </div>
            );
          })}
          </NavLink>
        </div>
      </div>
      
    </div>
  );
}

export default Posts;
