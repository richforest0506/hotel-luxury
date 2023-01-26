import { FC } from "react";
import NavBar from "./navbar";
import book_now from '../images/homepage/book_now.png';
import scroll_down from '../images/homepage/down_scroll.png';

const Rooms: FC = () => {
  return (
    <>
      <header className="header-rooms">
        <NavBar page='rooms' />
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
          <h2>ROOMS AND RATES</h2>
          <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,
            <br />comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented
            <br />by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
        </section>
        <section className="article-section-room-cards">
          <div className="article-section-room-card-styles">
            <div className="article-section-room-card-styles-imgsingle"></div>
            <div className="article-section-room-card-styles-type"><p>SINGLE ROOM</p></div>
            <div className="article-section-room-card-styles-details">
              <div>
                <details>
                  <summary>VIEW ROOM DETAILS</summary>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quos voluptatum omnis architecto, illum quae voluptatibus nam harum ipsa labore odio iste perspiciatis rerum laboriosam reprehenderit, magni possimus sed deleniti.</p>
                </details>
              </div>
              <button className="article-section-room-card-styles-details-button">$147  Avg/night</button>
            </div>
          </div>
          <div className="article-section-room-card-styles">
            <div className="article-section-room-card-styles-imgdouble"></div>
            <div className="article-section-room-card-styles-type"><p>DOUBLE ROOM</p></div>
            <div className="article-section-room-card-styles-details">
              <div>
                <details>
                  <summary>VIEW ROOM DETAILS</summary>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quos voluptatum omnis architecto, illum quae voluptatibus nam harum ipsa labore odio iste perspiciatis rerum laboriosam reprehenderit, magni possimus sed deleniti.</p>
                </details>
              </div>
              <button className="article-section-room-card-styles-details-button">$147  Avg/night</button>
            </div>
          </div>
          <div className="article-section-room-card-styles">
            <div className="article-section-room-card-styles-imgtwin"></div>
            <div className="article-section-room-card-styles-type"><p>TWIN ROOM</p></div>
            <div className="article-section-room-card-styles-details">
              <div>
                <details>
                  <summary>VIEW ROOM DETAILS</summary>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quos voluptatum omnis architecto, illum quae voluptatibus nam harum ipsa labore odio iste perspiciatis rerum laboriosam reprehenderit, magni possimus sed deleniti.</p>
                </details>
              </div>
              <button className="article-section-room-card-styles-details-button">$147  Avg/night</button>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default Rooms;