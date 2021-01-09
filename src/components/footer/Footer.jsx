import { Facebook, InsertLink, Twitter } from "@material-ui/icons";
import React from "react";
import "./Footer.scss";
import img1 from "../../images/img3.jpg";
import img2 from "../../images/img4.jpg";
import img3 from "../../images/img5.jpg";
import { Container } from "@material-ui/core";

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

const Footer = () => {
  return (
    <div className="footer-bg">
      <Container className="footer">
        <div className="logo">
          <h1>Blog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo
            fugiat voluptate reiciendis atque fugit tempora quod vero. Quidem,
            alias.
          </p>
          <div className="icons">
            <Facebook />
            <Twitter />
          </div>
        </div>
        <div className="recent-posts">
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
        </div>
        <div className="tags">
          <h1>Tags</h1>
          {tags.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
