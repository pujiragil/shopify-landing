import { motion } from "framer-motion";
import { Button } from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import CardImage from "./cardImage";

export default function CardItem({
  subtitle,
  subhead,
  paragraph,
  img,
  primary,
}) {
  const cardContent = {
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 100, opacity: 0 },
  };

  const cardImage = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.5 },
  };

  return (
    <div className="flex flex-col gap-[50px] md:flex-row md:gap-5 sm:items-center">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={cardContent}
        className={`${primary ? "md:order-2" : "md:order-1"} w-full`}
      >
        <Subtitle style="mb-2.5">{subtitle}</Subtitle>
        <SubHead style="mb-[18px] sm:w-4/5 md:w-full lg:w-11/12">
          {subhead}
        </SubHead>
        <Paragraph style="mb-[30px] w-4/5 sm:w-8/12 md:w-4/5 lg:w-8/12">
          {paragraph}
        </Paragraph>
        <Button>Buy Now</Button>
      </motion.section>
      <div
        className={`${
          primary ? "md:order-1" : "md:order-2"
        } sm:w-2/3 md:w-full lg:w-4/5`}
      >
        {/* <motion.img
          initial="hidden"
          whileInView="visible"
          variants={cardImage}
          className="w-full h-auto object-cover"
          src={img}
          alt="card"
        /> */}
        <CardImage/>
      </div>
    </div>
  );
}
