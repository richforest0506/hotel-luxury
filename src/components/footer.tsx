import { FC } from 'react';
import triangle from '../images/footer/triangule.svg';
import facebook from '../images/footer/facebook_icon.png';
import twitter from '../images/footer/twitter_icon.png';
import instagram from '../images/footer/instagram_icon.png';
import '../styles/main.css';
 
const Footer: FC = () => {
  return (
    <>
      <div>
        <div className="triangule-footer"> <img src={triangle} alt="" /> </div>
      </div>
      <footer>
        <div className="footer-contact">
          <h2>LUXURY</h2>
          <h3>HOTELS</h3>
          <p>1010 E Liberty St Mexico MO 65265<br />+1 (443) 484-3226<br />michaellucy522@gmail.com</p>
        </div>
        <div className="footer-about">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-socials">
          <ul>
            <li><img className="socials-facebook" src={facebook} alt="" />Facebook</li>
            <li><img className="socials-twitter" src={twitter} alt="" />Twitter</li>
            <li><img className="socials-instagram" src={instagram} alt="" />Instagram</li>
          </ul>
        </div>
        <div className="footer-form">
          <p>Subscribe to our newsletter</p>
          <form>
            <div className="footer-form-container">
              <input className="footer-form-mail" type="email" value="Email Adress" />
              <input className="footer-form-ok" type="submit" value="OK" />
            </div>
          </form>
        </div>
      </footer>
    </>
  )
}

export default Footer;