"use client";
import React, { useEffect } from "react";
import "../../styles/SecondSection.css"; // Import your CSS file
import image from "../../images/100.jpg";
import { PinContainer } from "./3d-pin";

// Define the AnimatedPinDemo component
function AnimatedPinDemo() {
  useEffect(() => {
    // Add scroll event listener to trigger animation for all AnimatedPinDemo elements
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Select all elements with class name .AnimatedPinDemo
    const elements = document.querySelectorAll(".AnimatedPinDemo");
    // Loop through each element
    elements.forEach((element) => {
      // Trigger animation when the element is in view
      if (element.getBoundingClientRect().top < window.innerHeight * 0.75) {
        element.classList.add("fade-in");
      }
    });
  };

  return (
    <div className="AnimatedPinDemo">
      <PinContainer title="Test">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3
            className="max-w-xs !pb-2 !m-0 font-bold"
            style={{ color: "#ffc300" }}
          >
            Product N2
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span style={{ color: "white" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque nemo eveniet commodi architecto nulla deleniti cum
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br" />
          <img src={image.src} alt="Description" />
        </div>
      </PinContainer>
    </div>
  );
}

// Define the SecondSection component
function SecondSection() {
  return (
    <div className="SecondSection">
      <div className="HeadText">
        <h1>Special Offers </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
          asperiores veniam.{" "}
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
      <div className="Cards">
        {/* Render three instances of AnimatedPinDemo */}
        <AnimatedPinDemo />
        <AnimatedPinDemo />
        <AnimatedPinDemo />
      </div>
    </div>
  );
}

export default SecondSection; // Export the SecondSection component
