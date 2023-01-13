import MainButton from "../Atoms/button";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[44px] p-5 pt-6  min-h-screen h-auto">
        <div className="flex flex-col gap-8">
          <section className="space-y-5 text-center">
            <h1 className="text-[42px] font-bold font-head text-primary-100">
              The platform commerce is built on.
            </h1>
            <p className="text-lg font-body text-black-300">
              Millions of the world's most successful brands trust Shopify to
              sell, ship and process payments anywhere.
            </p>
          </section>
          <div className="flex flex-col gap-[18px]">
            <MainButton primary={true}>admin demo</MainButton>
            <MainButton primary={false}>shop demo</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
