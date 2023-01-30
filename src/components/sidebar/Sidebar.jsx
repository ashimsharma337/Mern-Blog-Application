import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
     const getCats = async () => {
       const res = await axios.get(process.env.REACT_APP_BASE_URL+"/categories");
       setCats(res.data);
       
     }
     getCats();
  },[]);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt="flower"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Hic, velit laboriosam. Aliquid debitis pariatur quis voluptatum rem! 
             suscipit ullam harum pariatur et dolorum, 
          </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c, i) => (
            <Link to={`/?cat=${c.name}`} className="link" key={i}>
            <li className="sidebarListItem" >{c.name}</li>
            </Link>
          ))}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcons fa-brands fa-facebook-square"></i>   
          <i className="sidebarIcons fa-brands fa-twitter-square"></i>    
          <i className="sidebarIcons fa-brands fa-pinterest-p"></i>   
          <i className="sidebarIcons fa-brands fa-instagram-square"></i>  
        </div>
        </div>
    </div>
  )
}
