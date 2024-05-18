import React from "react";
import classes from "./index.module.scss";

interface indexProps {
  image: string;
  title: string;
  heading: string;
  description: string;
  buttonLink: string;
}

const index: React.FC<indexProps> = ({
  image,
  title,
  heading,
  description,
  buttonLink,
}) => {
  return (
    <div className={classes.blogcard_parent}>
      <img className={classes.prod_image} src={image} alt="productImage" />
      <div className={classes.title}>{title}</div>
      <div className={classes.heading}>{heading}</div>
      <div className={classes.desc}>{description}</div>
      <a href={buttonLink} target="_blank">
        Buy Now
      </a>
    </div>
  );
};
export default index;
