import { FC } from "react"
import NavBar from "./navbar"
import '../styles/main.css'
import gym from '../images/facilities/Facilities-GYM.png';
import breakfast from '../images/facilities/Facilities-breakfast.png';
import spa from '../images/facilities/Facilities-spa.png';
import market from '../images/facilities/Facilities-market.png';
import restaurant from '../images/facilities/Facilities-restaurant.png';
import laundry from '../images/facilities/Facilities-laundry.png';
import book_now from '../images/homepage/book_now.png';
import scroll_down from '../images/homepage/down_scroll.png';

const Facilities: FC = () => {
  return (
    <>
      <header className="header-facilities">
        <NavBar page='facilities'/>
        <section className="section-header-copy">
          <p>WELCOME TO</p>
          <h1 className="section-header-copy-h1">LUXURY</h1>
          <h2>HOTELS</h2>
          <h3>Book your stay and enjoy Luxury<br />redefined at the most affordable rates.</h3>
        </section>
        <section className="section-header-CTA">
          <div className="section-header-CTA-button"><img src={book_now} alt="" />BOOK NOW</div>
          <a href="#content-body" className="CTA-scroll-text">scroll</a>
          <a href="#content-body"><img src={scroll_down} className="CTA-scroll-imgstatic" alt="" /></a>
          <a href="#content-body" className="CTA-scroll-animate"><img src="./images/homepage/down_scroll.png" alt="" /></a>
        </section>
      </header>
      <article id="content-body">
        <section className="article-section-copy">
          <h2>FACILITIES</h2>
          <p>We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so
            <br />that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
            <br />and our modern luxury resort facilities will help you enjoy the best of all. </p>
        </section>
        <section className="article-section-gallery">
          <div className="article-section-gallery-div">
            <img src={gym} alt="" />
            <img src={breakfast} alt="" />
            <img src={spa} alt="" />
            <img src={market} alt="" />
            <img src={restaurant} alt="" />
            <img src={laundry} alt="" />
          </div>
        </section>
      </article>
    </>
  )
}

export default Facilities;