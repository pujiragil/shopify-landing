import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "One time payment",
      logo: "/feature-1.svg",
      content:
        "Check out our best practices and support to quickly make text messaging one of your top 3 revenue channels.",
    },
    {
      id: 2,
      title: "Self-reported data",
      logo: "/feature-2.svg",
      content:
        "You own your data, store design and business plan, but you are free to use the software platform and resources provided by Shopify.",
    },
    {
      id: 3,
      title: "Updates are always free",
      logo: "/feature-3.svg",
      content:
        "Shopify is so dedicated to keeping its software current that it sends you free updates for a lifetime without charging you anything.",
    },
    {
      id: 4,
      title: "Mobile first design",
      logo: "/feature-4.svg",
      content:
        "With our mobile app, you can allow your customers to check their order status, browse your store and create an account on the spot.",
    },
    {
      id: 5,
      title: "100% Customizable",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 6,
      title: "Easy task management",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
  ];

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <div className="text-center flex flex-col items-center">
          <Subtitle style="mb-2">360° CUSTOMIZABLE</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Have full control over your online store
          </SubHead>
          <Paragraph fontSize="text-sm" color="text-black-400" style="sm:w-3/5 md:w-7/12 lg:w-1/3">
            Take total control of your eCommerce business by owning the source
            code and data that drive it.
          </Paragraph>
        </div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dataFeatures?.map(feature => (
            <FeatureItem key={feature.id} feature={feature}/>
          ))}
        </div>
      </div>
    </div>
  );
}
