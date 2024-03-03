"use client";
import React, { useState } from "react";
import "../../styles/ProductView.css";
import Product from "../../images/4202-large.jpg";
import Footer from "../components/Footer";
function Popup({ phoneNumber, onClose }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or inquiries, please feel free to contact
          us:
        </p>
        <p>Phone: {phoneNumber}</p>
        <p>Email: info@example.com</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
function page() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCallButtonClick = () => {
    // Replace phoneNumber with the desired phone number
    const phoneNumber = "123-456-7890";
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="ProductViewContainer">
        <div className="ProductName">
          <h1>Calacatta Gold</h1>
          <p>
            <strong style={{ color: "#ffc300" }}>Calacatta Gold</strong>,
            inspired from Italy's most famous natural calacatta marble with gold
            dramatic veining in pure white background, is a luxurious color for
            your choice
          </p>
        </div>

        <div className="ProductImagee">
          <img src={Product.src} alt="product" />
        </div>
        <div class="ProductDetails">
          {" "}
          {showPopup && (
            <Popup phoneNumber="123-456-7890" onClose={handleClosePopup} />
          )}
          <div class="squareDetails">
            <div class="product-details">
              <div class="detail">
                <label>Color:</label> <strong>White</strong>
              </div>
              <div class="detail">
                <label>Size:</label> <strong>Medium</strong>
              </div>
              <div class="detail">
                <label>Material:</label> <strong>Cotton</strong>
              </div>
              <div class="detail">
                <label>Price:</label> <strong>$19.99</strong>
              </div>
              <div class="detail">
                <label>Availability:</label> <strong>In Stock</strong>
              </div>
              <div class="detail">
                <label>Book Now:</label>
                {/* Call button */}
                <strong>
                  {" "}
                  <button
                    onClick={handleCallButtonClick}
                    style={{ color: "white", borderBottom: "1px solid gold" }}
                  >
                    Call Us
                  </button>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

export default page;