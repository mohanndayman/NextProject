"use client";
import React, { useState } from "react";
import "../../styles/ProductView.css";
import Product from "../../images/4202-large.jpg";
import Footer from "../components/Footer";
import Image from "next/image";
import productOne from "../../images/product1.jpg";
import productTwo from "../../images/product2.jpg";
import productThree from "../../images/product3.jpg";

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

function Page() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(Product); // Default to main product image

  const handleCallButtonClick = () => {
    const phoneNumber = "123-456-7890";
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <>
      <div className="ProductViewContainer">
        <div className="ProductName">
          <h1>Calacatta Gold</h1>
          <p>
            <strong style={{ color: "#ffc300" }}>Calacatta Gold</strong>,
            inspired from Italy&apos;s most famous natural calacatta marble with
            gold dramatic veining in pure white background, is a luxurious color
            for your choice
          </p>
        </div>

        <div className="ProductImagee">
          <div className="productColors">
            <div
              className="productColorsSelect"
              onClick={() => handleImageClick(productOne)}
            >
              <Image
                src={productOne}
                alt="productOne"
                width={"100%"}
                height={"10vh"}
              />
            </div>
            <div
              className="productColorsSelect"
              onClick={() => handleImageClick(productTwo)}
            >
              <Image
                src={productTwo}
                alt="productTwo"
                width={"60%"}
                height={"45vh"}
              />
            </div>
            <div
              className="productColorsSelect"
              onClick={() => handleImageClick(productThree)}
            >
              <Image
                src={productThree}
                alt="productThree"
                width={"60%"}
                height={"45vh"}
              />
            </div>
          </div>
          <div className="productImageContainer">
            <Image
              src={selectedImage}
              alt="MainImage"
              width={"60%"}
              height={"45vh"}
            />
          </div>
        </div>
        <div className="ProductDetails">
          {showPopup && (
            <Popup phoneNumber="123-456-7890" onClose={handleClosePopup} />
          )}
          <div className="squareDetails">
            <div className="product-details">
              <div className="detail">
                <label>Color:</label> <strong>White</strong>
              </div>
              <div className="detail">
                <label>Size:</label> <strong>Medium</strong>
              </div>
              <div className="detail">
                <label>Material:</label> <strong>Cotton</strong>
              </div>
              <div className="detail">
                <label>Price:</label> <strong>$19.99</strong>
              </div>
              <div className="detail">
                <label>Availability:</label> <strong>In Stock</strong>
              </div>
              <div className="detail">
                <label>Book Now:</label>
                <strong>
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
      </div>
      <Footer />
    </>
  );
}

export default Page;
