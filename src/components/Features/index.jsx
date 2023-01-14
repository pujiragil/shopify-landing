import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";

export default function Features() {
  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10">
        {/* Head Content */}
        <div className="text-center">
          <Subtitle style="mb-2">360° CUSTOMIZABLE</Subtitle>
          <SubHead style="mb-[18px]">
            Have full control over your online store
          </SubHead>
          <Paragraph fontSize="text-sm" color="text-black-400">
            Take total control of your eCommerce business by owning the source
            code and data that drive it.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
