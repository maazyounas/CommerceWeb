import React from "react";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); //  between "Book Now" and "Reserve SeaTo distinguisht"

  // Show modal for Book Now or Reserve Seat
  const handleShowModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  // Hide modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  `1`;

  return (
    <div className="home">
      <div className="navbar">
        <div className="logo">
          <img src="commercelogo.jpg" alt="logo" />
          <h1 className="logoh1">Shop Fusion</h1>
        </div>

        <div className="nav-links">
          <ul>
            <li
              onClick={() =>
                document
                  .getElementById("Speakers")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Speakers
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("Sponsors")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              {" "}
              Our Sponsors
            </li>
            <li onClick={() => handleShowModal("Reserve Seat")}>
              Reserve Seat
            </li>
            <li onClick={() => handleShowModal("Book Now")}>Book Now</li>
          </ul>
        </div>
      </div>
      <div className="page1">
        <div className="left-content">
          <h1>Selling online is vital to busniess growth.</h1>
          <p className="firstp">2025 Grow Your e-Commerence Conference</p>
          <p className="secondp">September 16-18, 2025</p>
          <p className="thirdp">Paragon One Plaza and Sky Garden </p>
          <button className="btn" onClick={() => handleShowModal("Book Now")}>
            BOOK NOW FOR EARLY BIRD PRICES
          </button>
        </div>
        <div className="right-content">
          <img
            src="canvapic1.png"
            alt="Conference promotional"
            loading="lazy"
          />
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>
              {modalType === "Book Now"
                ? "Book Your Spot"
                : "Reserve Your Seat"}
            </h2>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Seats:</label>
              <input
                type="number"
                placeholder="Number of seats"
                min="1"
                required
              />

              <button type="submit">Submit</button>
            </form>
            <button className="close-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="page2">
        <div className="topcontent">
          <h1>
            The most awaited E-Commerence event is back!
            <span className="firstp">
              Every year, thousands of marketing, sales, and web development
              professionals gather in and around Venston Bay to discuss the
              future of e-commerce.
            </span>
          </h1>
        </div>
        <div className="bottomcontent">
          <img src="pic2.png" alt="" />
        </div>
      </div>

      <div className="page3" id="Speakers">
        <div className="tophead">
          <h1>Our 2025 Keynote Speakers</h1>
        </div>
        <div className="personal-info">
          <div className="speaker">
            <img src="pic3.png" alt="Leslie Boatwright" />
            <h3>Leslie Boatwright</h3>
            <p>Head of Marketing</p>
            <span>The Hobbibox</span>
            <h4>September 25</h4>
          </div>

          <div className="speaker">
            <img src="pic5.png" alt="Nicholas Newark" loading="lazy" />
            <h3>Nicholas Newark</h3>
            <p>Director of Design</p>
            <span>Studio Rallia</span>
            <h4>September 26</h4>
          </div>

          <div className="speaker">
            <img src="pic4.png" alt="Kin Gyun" loading="lazy" />
            <h3>Kin Gyun</h3>
            <p>Founder and CEO</p>
            <span>The Treasurebox Online</span>
            <h4>September 27</h4>
          </div>
        </div>
      </div>

      <div className="page4" id="Sponsors">
        <div className="left">
          <img src="pic6.png" alt="Sponsors" loading="lazy" />
        </div>
        <div className="right">
          <h1>Our Sponsors</h1>
          <p>
            Sandrine Logistics Murrayfield School of Marketing Schuester Digital
            Media Group Blue Samurai Productions Berao Solutions, Inc. Golden
            Ore Bank
          </p>
        </div>
      </div>

      <div className="page5">
        <div className="reach">
          <h1>Reach Out</h1>
          <p>
            Conference Secretariat 163 Woodlands Place Algies Bay, Rodney 0920
          </p>

          <p>123-456-7890 hello@reallygreatsite.com @reallygreatsite</p>

          <button
            className="button"
            onClick={() => handleShowModal("Reserve Seat")}
          >
            RESERVE YOUR SEAT
          </button>
        </div>

        <div className="img5">
          <img src="pic7.png" alt="seat" loading="lazy" />
        </div>
      </div>

      <div className="footer">
        <div className="row">
          <div className="column">
            <div className="logo">
              <img src="commercelogo.jpg" alt="logo" loading="lazy" /><h1>Shop Fusion</h1>
            </div>
            <div className="about">
              <h2>About Us</h2>
              <p>
                Don’t be afraid to use bright, fun colors on your About Us page
                (assuming they’re part of your brand identity) to make your
                brand more memorable. Where Magic Spoon really shines is its
                comparison chart. It gives you a clear visual of how its cereal
                compares to the competition.{" "}
              </p>
            </div>
            <div className="contact">
              <h1>
                Contact Us
              </h1>
              <p>email: maazyounas06@gmail.com</p>
              <p>phone no: +92 321 5326953</p>
               
            </div>
            <div className="footer-bottom">
              <p>Copyright 2023 - Shop Fusion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
