import { FC } from "react";
import NavBar from "./navbar";

const Contact: FC = () => {
  return (
    <>
      <header className="header-contactus">
        <NavBar page='contact_us'/>
        <section className="section-header-copy-contactus">
          <h1>CONTACT-US</h1>
        </section>
      </header>
      <article id="content-body">
        <section className="article-section-copy">
          <h2>WE ARE HERE FOR YOU</h2>
          <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
            <br/>please forward it to our support desk and we will get back to you as soon as possible.</p>
        </section>
        <section className="section-body-contactus">
          <div className="section-body-contactus-box">
            <p className="section-body-contactus-box-direction">1010 E Liberty St Mexico MO 65265</p>
            <p className="section-body-contactus-box-map">View map →</p>
            <p className="section-body-contactus-box-celmail">Phone: +1 (443) 484-3226<br />Email: michaellucy522@gmail.com</p>
          </div>
          <div>
            <form className="section-body-contactus-form">
              <label>Name</label>
              <input className="section-body-contactus-form-name" name="name" type="text" />
              <label>Email Address</label>
              <input className="section-body-contactus-form-mail" name="mail" type="text" />
              <label>message</label>
              <textarea className="section-body-contactus-form-message" name="message"></textarea>
              <button>submit</button>
            </form>
          </div>
        </section>
      </article>
    </>
  )
}

export default Contact;