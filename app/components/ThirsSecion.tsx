"use client";
import React from "react";
import "../../styles/ThirdSection.css"; // Import your CSS file
import { ParallaxScroll } from "./parallax-scroll";
import image from "../../images/100.jpg";
import image1 from "../../images/22.jpg";
import image2 from "../../images/33.jpg";
import image3 from "../../images/44.jpg";
import image4 from "../../images/55.jpg";
import image5 from "../../images/66.jpg";
import image6 from "../../images/77.jpg";
import image7 from "../../images/88.jpg";
import image8 from "../../images/99.jpg";
import image9 from "../../images/99.jpg";
import image10 from "../../images/99.jpg";

const images = [
  image.src,
  image1.src,
  image2.src,
  image3.src,
  image4.src,
  image5.src,
  image6.src,
  image7.src,
  image8.src,
  image9.src,
  image1.src,
  image2.src,
  image3.src,
  image4.src,
];

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

function ThirsSecion() {
  return (
    <div className="ThirdSecitonContainer">
      <div className="HeadText">
        <h1>Our Best Product</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
          asperiores veniam.
        </p>
        <hr
          style={{
            width: "55%",
            marginTop: "20px",
            borderColor: "#ffc300",
            opacity: "0.6",
          }}
        />
      </div>
      <div className="ProductImage">
        <ParallaxScrollDemo />
      </div>
    </div>
  );
}

export default ThirsSecion;
