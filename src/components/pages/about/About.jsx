import { useEffect, useState } from "react";
import "./about.css";
import axios from "axios";

function About() {
  
  const [posts, setPosts] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
     axios.get(process.env.REACT_APP_BASE_URL+"/posts")
     .then((response) => {
      setPosts(response.data);
      //console.log(posts);
      
     })
  }, []);

  const description = posts.map((post) => {
    return post.desc;
  })

  console.log(description);

  
  
  

  return (
       
    <div className="container">
      {
        posts.map((object, i) => (
        
              <div className="aboutContainer" key={i}>
                <h4 className="aboutHeader">{object.title}</h4>
               <img 
                  src ={object.photo}
                  className="image"
                />
                <p className="detailsIntro">{object.desc}</p>
              </div>
        
        
       ))
      }

      </div>

      
      
       
      
       
      // 
      

    
    



    // <div className="container">
    //   <div className="aboutContainer">
    //     <h4 className="aboutHeader">Music</h4>
    //     <img 
    //       src ="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-Music-Note-Background.jpg"
    //       className="image"
    //     />
    //     <p className="detailsIntro">Music benifits on health.....</p>
    //   </div>

    //   <div className="aboutContainer">
    //     <h4 className="aboutHeader">Life</h4>
    //     <img 
    //       src ="https://www.hiboox.com/wp-content/uploads/2019/10/image_1.jpg"
    //       className="image"
    //     />
    //     <p className="detailsIntro">Hiking benifits.....</p>
    //   </div>

    //   <div className="aboutContainer">
    //     <h4 className="aboutHeader">Food</h4>
    //     <img 
    //       src ="https://www.thrivenaija.com/wp-content/uploads/2019/12/eating-healthy-food.jpg"
    //       className="image"
    //     />
    //     <p className="detailsIntro">Eating Healthy.....</p>
    //   </div>

    //   <div className="aboutContainer">
    //     <h4 className="aboutHeader">Travel</h4>
    //     <img 
    //       src ="https://adamhartung.com/wp-content/uploads/Tropical-Vacation.jpg"
    //       className="image"
    //     />
    //     <p className="detailsIntro">Planing Vacation.....</p>
    //   </div>

    //   <div className="aboutContainer">
    //     <h4 className="aboutHeader">Books</h4>
    //     <img 
    //       src ="https://bestlifeonline.com/wp-content/uploads/sites/3/2020/06/books.jpg?quality=82&strip=1&resize=1600%2C900"
    //       className="image"
    //     />
    //     <p className="detailsIntro">Books to Read.....</p>
    //   </div>

    //   <div className="aboutContainer">
    //     <h4 className="aboutHeader">Entertainment</h4>
    //     <img 
    //       src ="https://townsquare.media/site/442/files/2014/04/New-Movie-Releases-May-2014.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"
    //       className="image"
    //     />
    //     <p className="detailsIntro">New Movie.....</p>
    //   </div>

    //   <div className="aboutContainer">
    //     <h4 className="aboutHeader">Fashion</h4>
    //     <img 
    //       src ="https://www.hellofashionblog.com/wp-content/uploads/2020/04/collage-horizontal.png"
    //       className="image"
    //     />
    //     <p className="detailsIntro">New Design.....</p>
    //   </div>

    //   <div className="aboutContainer">
    //     <h4 className="aboutHeader">Festivals</h4>
    //     <img 
    //       src ="https://thefestivalshub.com/wp-content/uploads/2022/06/INmusic-Festival-2022-1.jpg"
    //       className="image"
    //     />
    //     <p className="detailsIntro">Upcoming Festivals.....</p>
    //   </div>

    // </div>
    
   )
 }

export default About;