import "../styles/index.css";
import { HeroParallax } from "./components/hero-parallax";
import image1 from "../images/22.jpg";
import image2 from "../images/33.jpg";
import image3 from "../images/44.jpg";
import image4 from "../images/55.jpg";
import image5 from "../images/66.jpg";
import image10 from "../images/99.jpg";
import SecondSecion from "./components/SecondSecion";
import ThirsSecion from "./components/ThirsSecion";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  const products = [
    { title: "one o one", link: "#", thumbnail: image1.src }, // Adjusted image1 to image1.src
    { title: "Product 2", link: "#", thumbnail: image5.src }, // Adjusted image5 to image5.src
    { title: "Product 2", link: "#", thumbnail: image2.src }, // Adjusted image2 to image2.src
    { title: "Product 2", link: "#", thumbnail: image4.src }, // Adjusted image4 to image4.src
    { title: "Product 2", link: "#", thumbnail: image10.src }, // Adjusted image10 to image10.src
    { title: "Product 2", link: "#", thumbnail: image3.src }, // Adjusted image3 to image3.src
    // Add more products as needed
  ];

  return (
    <>
      <div className="indexHomePage">
        <div className="HeroSection">
          <HeroParallax products={products} />
          <SecondSecion />
          <ThirsSecion />
          <Reviews />
          <Footer />
        </div>
      </div>
    </>
  );
}
