import React from "react";
import BlogCard from "../Blogcard";
import classes from "./index.module.scss";
import diaperImage from "../../assets/product_images/daipers.jpg";
import shampooImage from "../../assets/product_images/shampoo.jpg";
import TrimmerImage from "../../assets/product_images/trimmer.jpg";
import Ariel from "../../assets/product_images/ariel.jpg";
import Dumbell from "../../assets/product_images/dumbell.jpg";
import LymioTshirt from "../../assets/product_images/lymiotshirt.jpg";

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
    {
      image: Dumbell,
      title: "Sports",
      heading: "Lifelong PVC Hex Dumbbells Pack of 2 for Home Gym",
      description: "Set of 2 PVC hex dumbbells for resistance training; each dumbbell weighs 2 kg *2 total 4 kg weight Made in India",
      buttonLink: "https://amzn.to/3ypGqY3"
    },
    {
      image: LymioTshirt,
      title: "Clothing",
      heading: "Lymio Men T-Shirt || T-Shirt for Men || Plain T Shirt || T-Shirt (Polo-18-21)",
      description: "Men T Shirt, Color Disclaimer: Product color might slightly vary due to photographic lighting sources or your monitor settings",
      buttonLink: "https://amzn.to/4br6LDp"
    }

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
