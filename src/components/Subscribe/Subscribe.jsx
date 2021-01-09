import { Badge, Container } from "@material-ui/core";
import {
  CommentOutlined,
  FavoriteBorderOutlined,
  InsertLink,
  Loyalty,
  Search,
} from "@material-ui/icons";
import React from "react";
import "./Subscribe.scss";
import img1 from "../../images/img3.jpg";
import img2 from "../../images/img4.jpg";
import img3 from "../../images/img5.jpg";
import img4 from "../../images/img6.jpg";
import img5 from "../../images/img7.jpg";

const articles = [
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

const tags = [
  "BIKE",
  "BUILDING",
  "CAMERA",
  "CRADT",
  "GEAR",
  "GIRL",
  "JUMPING",
  "LAKE",
  "LIFESTYLE",
  "MASTER",
  "MOCK_UP",
  "MOTIVATION",
  "TROOPER",
  "OFFICE",
  "SWIMMING",
  "NOTEBOOK",
  "MOUNTAINS",
];

const Subscribe = () => {
  return (
    <Container className="subscribe">
      <div className="content">
        <h1>
          <span>Subscribe</span> to get my latest updates
        </h1>
        <input type="text" placeholder="Please, enter your email.." />
        <button>SEND</button>
      </div>
      <div className="container">
        <div className="trending-articles">
          <div className="title">
            <h1>Trending articles</h1>
          </div>
          {articles.map((article) => (
            <div className="article">
              <div className="image">
                <img src={article.img} alt="the blog title" />
                <span>
                  <InsertLink />
                </span>
              </div>
              <div className={`info `}>
                <h2>{article.title}</h2>
                <span>{article.by}</span>
                <p>{article.desc}</p>
                <div className="comments">
                  <div className="tages">
                    <Loyalty />
                    <span>{article.tages}</span>
                  </div>
                  <CommentOutlined />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="latest-posts">
          <div className="title">
            <h1>Latest posts</h1>
          </div>
          <div className="posts">
            {articles.map((article) => (
              <div className="post">
                <div className="image">
                  <img src={article.img} alt="the blog title" />
                  <span>
                    <InsertLink />
                  </span>
                </div>
                <div className={`info `}>
                  <span>{article.tages}</span>
                  <h2>{article.title}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="adverisement">
            <h1>Adverisement</h1>
            <span>Custom Vertical Height</span>
          </div>
          <div className="search">
            <input type="text" placeholder="Search here.." />
            <Search className="icon" />
          </div>
          <div className="popular-tags">
            {tags.map((tag) => (
              <span className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Subscribe;
