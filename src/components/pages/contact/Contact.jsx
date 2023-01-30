import "./contact.css";

function Contact() {
  return (
    <div className="mainContainer">
        <p className="topMsg">We're glad you have chosen to message us.</p>
        <form className="contactContainer">
            <label className="name" htmlFor='name'>Fullname</label>
            <input className="input" type="text" name='fullname'></input>
            <label className="email" htmlFor='email'>Email</label>
            <input className="input" type="text" name='email'></input>
            <label className="message" htmlFor='Message' name="message">Message</label>
            <textarea className="comment"></textarea>
            <button className="button" type="submit">Submit</button>
        </form>
    </div>

  )
}

export default Contact