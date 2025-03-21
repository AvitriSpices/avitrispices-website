import Navbar_Menu from "../../../Components/Navbar_Menu";
import { useEffect } from "react";
import LearnMore from "../../../Pages/Home/LearnMore";
import Footer from "../../../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import currypowder from "/media/currypowder.png";
import fivespieceside from "/media/fivespieceside.jpeg";
import cholemasaladiytop from "/media/cholemasaladiytop.jpeg";
import rasampowderkit from "/media/rasampowderkit.jpeg";
import butterpaneerkit from "/media/butterpaneerkit.jpeg";
import carolekittop from "/media/carolekittop.jpeg";
import pavbhajidiytop from "/media/pavbhajidiytop.jpeg";
import tacoseasoningtop from "/media/tacoseasoningtop.jpeg";
import biyranimasalaside from "/media/biyranimasalaside.jpeg";
import currypowderkit from "/media/currypowderkit.jpeg";
import garammasalakit from "/media/garammasalakit.jpeg";
// import gingerpowder from "/media/gingerpowder.png";
// import pav_bhaji from "/media/pav_bhaji.png";
// import turmericpowder from "/media/turmericpowder.png";
import Vector from "/media/Vector.png";
import spices from "/media/masala-collection.png";
import masalaBox from "/media/1.png";
import AdvertisingProducts from "../../../Pages/Products/AdvertisingProducts";
import DiyProductsAll from "./DiyProductsAll";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

const diyspiceslist = [
  {
    id: 45,
    heading: "DIY CHOLE MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: cholemasaladiytop,
    title: "DIY CHOLE MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 46,
    heading: "DIY GARAM MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: garammasalakit,
    title: "DIY GARAM MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 47,
    heading: "DIY RASAM POWDER KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: rasampowderkit,
    title: "DIY RASAM POWDER KIT ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 48,
    heading: "DIY BUTTER PANEER MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: butterpaneerkit,
    title: "DIY BUTTER PANEER MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 49,
    heading: "DIY CAROLE SEASONING KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: carolekittop,
    title: "DIY CAROLE SEASONING KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 50,
    heading: "DIY PAV BHAJI MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: pavbhajidiytop,
    title: "DIY PAV BHAJI MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 51,
    heading: "DIY TACO SEASONING MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: tacoseasoningtop,
    title: "DIY TACO SEASONING MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 52,
    heading: "DIY BIRYANI MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: biyranimasalaside,
    title: "DIY BIRYANI MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 53,
    heading: "DIY CURRY POWDER KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: currypowderkit,
    title: "DIY CURRY POWDER KIT",
    discountPrice: "135",
    price: "125",
  },

  {
    id: 54,
    heading: "DIY CHINESE FIVE SPICE KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: fivespieceside,
    title: "DIY CHINESE FIVE SPICE KIT",
    discountPrice: "135",
    price: "125",
  },
];

export default function DiySpicesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (id, title, discountPrice, price, image) => {
    dispatch(addToCart({ id, title, discountPrice, price, image }));
    navigate("/cart");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const diy = diyspiceslist.find((p) => p.id === parseInt(id));

  if (!diy) {
    return <h2>Diy Spices not found</h2>;
  }

  return (
    <>
      {/* Navbar Top */}
      <Navbar_Menu />

      {/* Banner Advertising */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          position: "relative",
          backgroundColor: "#AF261D",
          color: "white",
          textAlign: "center",
          padding: "25% 0",
        }}
        className="div-background-carts"
      >
        <Container>
          <h1
            style={{
              lineHeight: "1.5",
              letterSpacing: "2px",
              fontSize: "40px",
              maxWidth: "100%",
              fontWeight: "bold",
              fontFamily: "kapraneue, sans-serif",
              margin: "3% 0",
            }}
          >
            {diy.heading}
          </h1>
          <Row className="justify-content-center">
            <Col sm={4} className="d-flex flex-column justify-content-center">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  letterSpacing: "1px",
                }}
                className="p-contents-products"
              >
                {diy.content}
              </p>
            </Col>
            <Col sm={4} className="d-flex flex-column justify-content-center">
              <img
                src={diy.image}
                alt="whitepepper"
                style={{
                  width: "70%",
                  height: "auto",
                  objectFit: "cover",
                  alignSelf: "center",
                }}
                 className="addtoproduct-img"
              />
            </Col>
            <Col
              sm={4}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "50px",
                  textAlign: "center",
                  color: "black",
                  width: "80%",
                }}
                className="background-cartbox"
              >
                <h2 style={{ fontSize: "35px", margin: "5% 0" }} className="h2-products-title">
                  {diy.title}
                </h2>
                <p
                  style={{
                    backgroundImage: "url('/media/Sale.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px",
                    textAlign: "center",
                  }}
                   className="sale-box"
                >
                  Sale
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "center",
                    fontSize: "45px",
                  }}
                  className="price"
                >
                  <p
                    style={{
                      textDecoration: "line-through",
                      margin: 0,
                      fontSize: "25px",
                      opacity: "0.5",
                    }}
                    className="cutprice"
                  >
                    Rs {diy.discountPrice}
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    Rs {diy.price}
                  </p>
                </div>
                <div
                  style={{
                    position: "relative",
                    height: "50px",
                    margin: "5% 10%",
                    cursor: "pointer",
                  }}
                  className="zoom-in-image"
                  onClick={() =>
                    handleAddToCart(
                      diy.id,
                      diy.title,
                      diy.discountPrice,
                      diy.price,
                      diy.image
                    )
                  }
                >
                  <img
                    src={Vector}
                    alt="Vector-img"
                    style={{
                      width: "80%",
                      height: "100%",
                    }}
                  />
                  <h3
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      color: "white",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "5px",
                      width: "100%",
                      fontFamily: "kapraneue, sans-serif",
                    }}
                    className="addtocart-btn"
                  >
                    ADD TO CART
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <AdvertisingProducts />

      {/* HEALTH BENEFITS */}
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "kapraneue, sans-serif",
            fontSize: "45px",
            letterSpacing: "2px",
            marginBottom: "5%",
          }}
          className="h1-healthbenefits"
        >
          SO WHAT ARE THE HEALTH BENEFITS OF OUR WHOLE SPICES
        </h1>
        <Container>
          <Row>
            <Col sm={4}>
              <div
                style={{
                  display: "inline-block",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    boxShadow: "1px 1px 10px darkgrey",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#B0261E",
                    marginBottom: "30px",
                  }}
                   className="img-healthbenefits"
                >
                  <img
                    src={spices}
                    alt="spices-masala"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {/* <img
                  src={spices}
                  alt="spices-masala"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                /> */}
                <h2
                  style={{
                    fontFamily: "kapraneue, sans-serif",
                    fontSize: "35px",
                    letterSpacing: "1px",
                  }}
                  className="h2-spices-title"
                >
                  WHOLE SPICES
                </h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                  className="p-spices-contents"
                >
                  Whole spices are natural seasonings used to enhance the flavor
                  and aroma of food. They include ingredients like cinnamon
                  sticks, cloves, and cardamom pods, their essence slowly when
                  cooked.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div
                style={{
                  display: "inline-block",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    boxShadow: "1px 1px 10px darkgrey",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#B0261E",
                    marginBottom: "30px",
                  }}
                   className="img-healthbenefits"
                >
                  <img
                    src={masalaBox}
                    alt="spices-masala"
                    style={{
                      width: "80%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {/* <img
                  src={spices}
                  alt="spices-masala"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                /> */}
                <h2>DIY KIT</h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                  className="p-spices-contents"
                >
                  Whole spices are dried, unprocessed plant parts used in
                  cooking to add depth to dishes. Popular options like bay
                  leaves, peppercorns, and star anise are often used in stews
                  and curries.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div
                style={{
                  display: "inline-block",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    boxShadow: "1px 1px 10px darkgrey",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#B0261E",
                    marginBottom: "30px",
                  }}
                  className="img-healthbenefits"
                >
                  <img
                    src={currypowder}
                    alt="currypowder"
                    style={{
                      width: "50%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {/* <img
                  src={spices}
                  alt="spices-masala"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                /> */}
                <h2>GROUND SPICES</h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                  className="p-spices-contents"
                >
                  Whole spices retain their full flavor as they are not ground
                  into powder. Their fresh and aromatic qualities make them
                  perfect for slowcooked recipes and seasoning spicy blends and
                  Powders.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* YOU MAY ALSO LIKE... */}
      <DiyProductsAll />

      <LearnMore />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
