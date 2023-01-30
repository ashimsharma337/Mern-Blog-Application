import "./header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg"
        src="https://optimizedude.com/wp-content/uploads/2015/02/Cool-Twitter-Header-2.jpg"
        alt="blog"
        />
    </div>
  )
}
