import Image from "next/image";
import Link from "next/link";
import "../styles/index.css";
import { HeroParallax } from "./components/hero-parallax";
import image1 from "../images/22.jpg";
import image2 from "../images/33.jpg";
import image3 from "../images/44.jpg";
import image4 from "../images/55.jpg";
import image5 from "../images/66.jpg";
import image6 from "../images/77.jpg";
import image7 from "../images/88.jpg";
import image8 from "../images/99.jpg";
import image9 from "../images/99.jpg";
import image10 from "../images/99.jpg";
import SecondSecion from "./components/SecondSecion";

export default function Home() {
  const products = [
    { title: "one o one", link: "#", thumbnail: image1 },
    { title: "Product 2", link: "#", thumbnail: image5 },
    { title: "Product 2", link: "#", thumbnail: image2 },
    { title: "Product 2", link: "#", thumbnail: image4 },
    { title: "Product 2", link: "#", thumbnail: image10 },
    { title: "Product 2", link: "#", thumbnail: image3 },

    // Add more products as needed
  ];

  return (
    <>
      <div className="indexHomePage">
        <div className="HeroSection">
          <HeroParallax products={products} />
          <SecondSecion />
        </div>
      </div>
    </>
  );
}
