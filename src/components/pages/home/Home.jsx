import { useEffect, useState } from "react";
import "../home/home.css";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  //const location = useLocation();
  //console.log(location);

  useEffect(() => {
    const fetchPosts = async () => {
     const res = await  axios.get(process.env.REACT_APP_BASE_URL+"/posts"+search);
     setPosts(res.data);
    }
    fetchPosts();
  }, [search]);
  return (
      <>
       <Header/>
       <div className="home">
       <Posts posts={posts}/>
       <Sidebar/>
       </div>
     </>
  )
}
