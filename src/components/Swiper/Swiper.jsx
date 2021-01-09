import React from "react";
import "./Swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";
import { CommentOutlined } from "@material-ui/icons";
import img1 from "../../images/img3.jpg";
import img2 from "../../images/img4.jpg";
import img3 from "../../images/img5.jpg";
import img4 from "../../images/img6.jpg";
import img5 from "../../images/img7.jpg";
import { Container } from "@material-ui/core";

SwiperCore.use([Autoplay]);

const swiperItems = [
  {
    img: img1,
    title: "Trip that you all never ever forget",
    by: "Moaml RH - November 11, 2020",
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae assumenda laborum non?",
    tages: "POPEL, TRAVEL",
  },
  {
    img: img2,
    title: "Must-have gear",
    by: "Moaml RH - November 11, 2020",
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae assumenda laborum non?",
    tages: "PHOTOGRAPHY, TECH",
  },
  {
    img: img3,
    title: "Healthy breakfast ideas",
    by: "Moaml RH - November 11, 2020",
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae assumenda laborum non?",
    tages: " Design, Photography",
  },
  {
    img: img4,
    title: "Morning routine",
    by: "Moaml RH - November 11, 2020",
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae assumenda laborum non?",
    tages: "POPEL",
  },
  {
    img: img5,
    title: "Top 5 tips to have a great vacation",
    by: "Moaml RH - November 11, 2020",
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae assumenda laborum non?",
    tages: "POPEL, TRAVEL",
  },
];

const SwiperComponent = () => {
  return (
    <div className="container-background">
      <div className="title">
        <h1>
          <span>All about</span> stationary & travel gear
        </h1>
      </div>
      <Container>
        <Swiper
          className="swiper"
          autoplay={{
            delay: 1500,
          }}
          breakpoints={{
            850: {
              slidesPerView: 3,
            },
            650: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={1}
          spaceBetween={50}
          loop
        >
          {swiperItems.map((item) => (
            <SwiperSlide className="item">
              <div className="image">
                <img src={item.img} alt="img title" />
              </div>
              <div className="info">
                <span>{item.by}</span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="comments">
                  <CommentOutlined />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default SwiperComponent;
