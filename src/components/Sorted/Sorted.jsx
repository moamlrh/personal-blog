import React from "react";
import "./Sorted.scss";
import { CommentOutlined, InsertLink, Loyalty } from "@material-ui/icons";
import img1 from "../../images/img3.jpg";
import img2 from "../../images/img4.jpg";
import img3 from "../../images/img5.jpg";
import img4 from "../../images/img6.jpg";
import img5 from "../../images/img7.jpg";
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

const Sorted = () => {
  return (
    <Container>
      <div className="sorted">
        <div className="title">
          <h1>
            <span>Everything</span> sorted for you
          </h1>
        </div>
        <div className="articles">
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
      </div>
    </Container>
  );
};

export default Sorted;
