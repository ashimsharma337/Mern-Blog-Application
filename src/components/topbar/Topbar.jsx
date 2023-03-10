import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context"

function Topbar() {
   const { user, dispatch } = useContext(Context);
   const PF = process.env.REACT_APP_BASE_URL+"/images/";

   const handleLogout = () => {
      dispatch({type: "LOGOUT"});
   };
  return (
     <div className="top">
         <div className="topLeft">
            <i className="topIcons fa-brands fa-facebook-square"></i>   
            <i className="topIcons fa-brands fa-twitter-square"></i>    
            <i className="topIcons fa-brands fa-pinterest-p"></i>   
            <i className="topIcons fa-brands fa-instagram-square"></i>  
         </div>
         <div className="topCenter">
              <ul className="topList">
                 <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
                 <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
                 <li className="topListItem"><Link to="/contact" className="link">CONTACT</Link></li>
                 <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                 <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
              </ul>
         </div>
         <div className="topRight">
            {
               user ? (
                <Link to = "/settings">
                  <img 
                    className="topImg"
                    src={PF+user.profilePic}
                    alt="Profile Pic" /> 
                </Link>
               ) : (
                   <ul className="topList">
                      <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                      </li>
                      <li className="topListItem">
                        <Link className="link" to="/register">REGISTER</Link>
                      </li>
                   </ul>
                   )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
         </div>
     </div>
  )
}

export default Topbar