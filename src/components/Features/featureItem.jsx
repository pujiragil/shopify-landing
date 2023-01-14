import Paragraph from "../Atoms/paragraph";

export default function FeatureItem({ feature }) {
  return (
    <section className="flex flex-col border border-black-200 feature-item">
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-black-200">
        <h4 className="text-black-100 font-body font-medium text-lg">
          {feature?.title}
        </h4>
        <img src={feature?.logo} alt="feature-logo" />
      </div>
      <div className="p-6 pb-10">
        <Paragraph>{feature?.content}</Paragraph>
      </div>
    </section>
  );
}
