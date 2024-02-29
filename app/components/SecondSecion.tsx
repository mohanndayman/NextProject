import React from "react";
import "../../styles/SecondSection.css";
import image from "../../images/100.jpg";
import { PinContainer } from "./3d-pin";
export function AnimatedPinDemo() {
  return (
    <div className="h-[30rem] w-55 flex items-center justify-center ">
      <PinContainer title="Test" href="https://twitter.com/mannupaaji">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3
            className="max-w-xs !pb-2 !m-0 font-bold "
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
function SecondSecion() {
  return (
    <div className="SecondSection">
      <div className="HeadText">
        <h1>Our Best Products </h1>
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
        <AnimatedPinDemo />
        <AnimatedPinDemo />
        <AnimatedPinDemo />
      </div>
    </div>
  );
}

export default SecondSecion;
