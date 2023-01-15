import { Button } from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";

export default function CardItem({
  subtitle,
  subhead,
  paragraph,
  img,
  primary,
}) {
  return (
    <div className="flex flex-col gap-[50px] md:flex-row md:gap-5 md:items-center">
      <section className={`${primary ? "md:order-2" : "md:order-1"} w-full`}>
        <Subtitle style="mb-2.5">{subtitle}</Subtitle>
        <SubHead style="mb-[18px] sm:w-4/5 md:w-full">{subhead}</SubHead>
        <Paragraph style="mb-[30px] md:w-4/5">{paragraph}</Paragraph>
        <Button>Buy Now</Button>
      </section>
      <div className={`${primary ? "md:order-1" : "md:order-2"} w-full`}>
        <img className="w-full h-auto object-cover" src={img} alt="card" />
      </div>
    </div>
  );
}
