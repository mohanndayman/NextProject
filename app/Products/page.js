"use client";
import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "../../styles/product.css";
import { LampContainer } from "../components/lamp";
import { motion } from "framer-motion";
import image1 from "../../images/22.jpg";

function Product({ id, name, price }) {
  const [fadeIn, setFadeIn] = React.useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const fade = useSpring({
    opacity: fadeIn ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1700 },
    delay: id * 200,
  });

  return (
    <animated.div style={fade} className="squars">
      <div className="leftFlex">
        <img src={image1.src} alt="Product" />
        <div className="NameAndRateSquare">
          <div className="NameAndRate">
            <h1 style={{ color: "#ffc300" }}>{name}</h1>
            <h1>
              <span style={{ color: "#ffc300" }}>Price :</span> {price}
              <span style={{ color: "#ffc300" }}>$</span>
            </h1>
          </div>
          <div className="rateee">
            <div className="rate">
              <input
                type="radio"
                id={`star5-${id}`}
                name={`rate-${id}`}
                value="5"
              />
              <label htmlFor={`star5-${id}`} title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label htmlFor="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label htmlFor="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label htmlFor="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label htmlFor="star1" title="text">
                1 star
              </label>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      ></motion.h1>
    </LampContainer>
  );
}

function Page() {
  const products = [
    { id: 1, name: "Laptop", price: 899, imageUrl: "laptop_image_url.jpg" },
    {
      id: 2,
      name: "Smartphone",
      price: 599,
      imageUrl: "smartphone_image_url.jpg",
    },
    {
      id: 3,
      name: "Coffee Maker",
      price: 49.99,
      imageUrl: "coffee_maker_image_url.jpg",
    },
    {
      id: 4,
      name: "Backpack",
      price: 39.99,
      imageUrl: "backpack_image_url.jpg",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 79.99,
      imageUrl: "speaker_image_url.jpg",
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 99.99,
      imageUrl: "shoes_image_url.jpg",
    },
    {
      id: 7,
      name: "Running Shoes",
      price: 99.99,
      imageUrl: "shoes_image_url.jpg",
    },
    {
      id: 8,
      name: "Running Shoes",
      price: 99.99,
      imageUrl: "shoes_image_url.jpg",
    },
  ];
  return (
    <div className="productContainer">
      <div className="productSquare">
        <LampContainer />
      </div>
      <div className="sqauresContainer">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Page;
