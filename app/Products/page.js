"use client";

import React from "react";
import "../../styles/product.css";
import { LampContainer } from "../components/lamp";
import { motion } from "framer-motion";
import image1 from "../../images/22.jpg";

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
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

function page() {
  return (
    <div className="productContainer">
      <div className="productSquare">
        <LampContainer />
      </div>
      <div className="sqauresContainer">
        <div className="squars">
          <div className="leftFlex">
            <img src={image1.src} alt="Product" />
            <h1 style={{ color: "#ffc300" }}>Product Name ..</h1>
            <h1>Price : 32$</h1>
          </div>
          <div className="rightFlex">
            <p>
              Did you know that the first product to have a barcode scanned for
              retail sale was a packet of Wrigley's chewing gum? It happened on
              June 26, 1974, at a Marsh supermarket in Troy, Ohio. This event
              marked a significant milestone in the history of product marketing
              and inventory management.
            </p>
          </div>
        </div>
        <div className="squars"> </div>
        <div className="squars"> </div>
        <div className="squars"> </div>
        <div className="squars"> </div>
      </div>
    </div>
  );
}

export default page;
