import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";


function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={user ? <Home/> : <Register/>} />
        <Route path="/login" element={user ? <Home/> : <Login/>} />
        <Route path="/write" element={user ? <Write/> : <Register/>} />
        <Route path="/settings" element={user ? <Settings/> :<Register/>} />
        <Route path="/posts/:postId" element={<Single/>} />
      </Routes>
    </Router>
  );
}

export default App;
