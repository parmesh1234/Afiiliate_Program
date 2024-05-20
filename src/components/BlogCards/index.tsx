import React from "react";
import BlogCard from "../Blogcard";
import classes from "./index.module.scss";
import diaperImage from "../../assets/product_images/daipers.jpg";
import shampooImage from "../../assets/product_images/shampoo.jpg";
import TrimmerImage from "../../assets/product_images/trimmer.jpg";
import Ariel from "../../assets/product_images/ariel.jpg";
import { useMedia } from "react-use";

type indexProps = {};

const Blogcards: React.FC<indexProps> = () => {
  const isWide = useMedia("(min-width: 1024px)");

  const productList = [
    {
      image: diaperImage,
      title: "Baby",
      heading: "Pampers All round Protection Pants Style Baby Diapers.",
      description:
        "New & Improved Pampers All-round Protection Pants – high quality diaper pants for complete protection of your baby",
      buttonLink:
        "https://amzn.to/3WU7bhv",
    },
    {
      image: shampooImage,
      title: "Hain Care",
      heading: "Bare Anatomy Anti Hair Fall Shampoo",
      description:
        "PREVENT HAIR BREAKAGE FROM STRANDS: Hair breakage occurs when over-conditioning makes the hair too heavy, and the roots cannot bear the weight of the heavy hair follicle.",
      buttonLink:
        "https://amzn.to/3WNR7xJ",
    },
    {
      image: TrimmerImage,
      title: "Electronics",
      heading: "MI Xiaomi Grooming Kit,(Trimmer Kit)",
      description:
        "Effortlessly Switch up your Grooming Routine - Experience the convenience of all your grooming needs in one kit, featuring multiple attachments",
      buttonLink:
        "https://amzn.to/3K73LAn",
    },
    {
      image: Ariel,
      title: "Grocery",
      heading: "Ariel Matic Front Load Detergent Washing Powder 4 Kg+2 Kg Free, 1 Count",
      description:
        "Ariel Matic detergent provides best cleaning in just 1 wash. It can tackle tough stains like tea, coffee, tomato, etc",
      buttonLink:
        "https://amzn.to/3wICRvk",
    },


  ];
  return (
    <>

      <div className={classes.blogs_container}>
        {productList.map((e, i) => {
          return (
            <BlogCard
              key={e.title + i}
              image={e.image}
              title={e.title}
              heading={e.heading}
              description={e.description}
              buttonLink={e.buttonLink}
            />
          );
        })}
      </div>
    </>
  );
};
export default Blogcards;
