import React from "react";
import BlogCard from "../Blogcard";
import classes from "./index.module.scss";
import diaperImage from "../../assets/product_images/daipers.jpg";
import shampooImage from "../../assets/product_images/shampoo.jpg";
import honeyImage from "../../assets/product_images/honey.jpg";
import Oil from "../../assets/product_images/oil.jpg";
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
        "https://www.amazon.in/gp/product/B07CXGS2VZ/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&th=1",
    },
    {
      image: shampooImage,
      title: "Hain Care",
      heading: "Bare Anatomy Anti Hair Fall Shampoo",
      description:
        "PREVENT HAIR BREAKAGE FROM STRANDS: Hair breakage occurs when over-conditioning makes the hair too heavy, and the roots cannot bear the weight of the heavy hair follicle.",
      buttonLink:
        "https://www.amazon.in/gp/product/B0BJ32VKB2/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1",
    },
    {
      image: honeyImage,
      title: "Grocery",
      heading: "Saffola Honey Active, Made with Sundarban Forest Honey",
      description:
        "Honey is a natural food and comes with tons of uses and benefits and should be used in its pure form..",
      buttonLink:
        "https://www.amazon.in/gp/product/B08B44K4YS/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1",
    },
    {
      image: Oil,
      title: "Grocery",
      heading: "Fortune Sunlite Refined Sunflower Oil, 1L",
      description:
        "Actual product packaging and materials may contain more and different information than what is shown on our app or website",
      buttonLink:
        "https://www.amazon.in/Fortune-Sunlite-Refined-Sunflower-Oil/dp/B00NYZTGEO/ref=pd_bxgy_d_sccl_1/261-6073260-8005066?pd_rd_w=0roLT&content-id=amzn1.sym.f406cf11-1229-4650-9e74-6c521f43ef93&pf_rd_p=f406cf11-1229-4650-9e74-6c521f43ef93&pf_rd_r=KWS2BJCDJBS7RDHA09TW&pd_rd_wg=vNIO5&pd_rd_r=79947c39-cf4f-4bad-9c1b-1360300bc24e&pd_rd_i=B00NYZTGEO&psc=1",
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
