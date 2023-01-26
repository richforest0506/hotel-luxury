import { FC, useEffect, useState } from 'react';
import NavBar from './navbar';
import "../styles/main.css"
import book_now from '../images/homepage/book_now.png';
import scroll_down from '../images/homepage/down_scroll.png';
const Home: FC = () => {
  return (
    <>
      <header className="header-home">
        <NavBar page='home' />
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
          <a href="#content-body" className="CTA-scroll-animate"><img src="../images/homepage/down_scroll.png" alt="" /></a>
        </section>
      </header>
      <article id="content-body">
        <section className="article-section-breakfast">
          <p>All our room types are including complementary breakfast</p>
        </section>
        <section className="article-section-main">
          <div className="article-section-main-room">
            <div className="article-section-main-room-copy">
              <div className="article-section-main-room-copy-child">
                <h2>Luxury redefined</h2>
                <p>Our rooms are designed to transport<br />you into an environment made for leisure.
                  <br />Take your mind off the day-to-day of home<br />life and find a private paradise for yourself.</p>
                <button>EXPLORE</button>
              </div>
            </div>
            <div className="article-section-main-room-img">
              <div className="article-section-main-room-img-content"></div>
            </div>
          </div>
          <div className="article-section-main-beach">
            <div className="article-section-main-beach-copy">
              <div className="article-section-main-beach-copy-child">
                <h2>Leave your worries in<br />the sand</h2>
                <p>Our facility welcomes guests with a clean, <br />
                  fragrant smell.  <br />
                  Have a good time in a clean and pleasant <br />
                  environment.</p>
                <button>EXPLORE</button>
              </div>
            </div>
            <div className="article-section-main-beach-img">
              <div className="article-section-main-beach-img-content"></div>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
export default Home;