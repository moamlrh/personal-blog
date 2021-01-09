import React from "react";
import "./Blog.scss";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import { Container } from "@material-ui/core";
import {
    CommentOutlined,
    FavoriteBorderOutlined,
    InsertLink,
  } from "@material-ui/icons";
  
const blogs = [
  {
    class: "left",
    title: "A quick midday swim for inspiration",
    by: "by Moaml RH, Novermber 23,2021",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi  reprehenderit cum ipsam alias dignissimos enim.",
    img: img1,
  },
  {
    class: "right",
    title: "Some of my favorite moments this year",
    by: "by Moaml RH,  November 11, 2021 ",
    desc:
      " Aliquam ornare mauris quis sapien interdum euod. Nullam a elementum odio. Vivamus vestibulum bib orci. ultricies...",
    img: img2,
  },
];

const Blog = () => {
  return (
    <Container className="blogs">
      {blogs.map((blog) => (
        <div className={`blog ${blog.class}`}>
          <div className="image">
            <img src={blog.img} alt="the blog title" />
            <span>
              <InsertLink />
            </span>
          </div>
          <div className={`info `}>
            <span>{blog.by}</span>
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>
            <div className="comments">
              <FavoriteBorderOutlined />
              <CommentOutlined />
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Blog;
