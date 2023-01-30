import "../singlePost/singlePost.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";


export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = process.env.REACT_APP_BASE_URL+"/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);


  useEffect(() => {
   const getPost = async () => {
     const res = await axios.get(process.env.REACT_APP_BASE_URL+"/posts/"+path);
     setPost(res.data);
     setTitle(res.data.title);
     setDesc(res.data.desc);
   }
   getPost();
  }, [path]);
  
  const handleDelete = async() => {
    try{
       await axios.delete(process.env.REACT_APP_BASE_URL+`/posts/${post._id}`, 
       {data: {username: user.username}
      });
       window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdate = async(e) => {
    try{
      await axios.put(process.env.REACT_APP_BASE_URL+`/posts/${post._id}`, 
      { 
        username: user.username, 
        title, 
        desc 
      });
      //window.location.reload();
      setUpdateMode(false);
   } catch (err) {
     console.log(err);
   }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          {post.photo && (
             <img 
               className="singlePostImg"
               src={PF + post.photo}
               alt=""  
             />
          )}{
            updateMode ? <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}className="singlePostTitleInput" autoFocus/> : (
              <h1 className="singlePostTitle">
                  {title}
                  {post.username === user?.username && (
                    <div className="singlePostEdit">
                      <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                      <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                    </div>
                  )}
              </h1>
          )}
          <div className="singlePostInfo">
              <span className="singlePostAuthor">
                  Author: 
                  <Link to={`/?user=${post.username}`} className="link">
                  <b>{post.username}</b>
                  </Link>   
              </span>
              <span className="singlePostDate">
                  {new Date(post.createdAt).toDateString()}
              </span>
          </div>
          {updateMode ? (
          <textarea className="singlePostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)}/> 
          ) : (
            <p className="singlePostDesc">
            {desc}
            </p>
          )}
          {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          )}
      </div>
    </div>
  )
}
