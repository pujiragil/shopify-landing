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
        <div className="flex items-center justify-center">
          <div className="relative w-fit">
            {/* main card */}
            <img
              className="w-[355px] h-auto object-cover relative"
              src="hero.png"
              alt="hero"
            />

            {/* chair card */}
            <div className="absolute top-[43%] right-7 flex flex-col items-center gap-1.5 p-2 rounded chair-card bg-white text-[5.48px] font-body text-black-400 w-[98px]">
              <p>Your Store</p>
              <img
                className="w-16 h-auto object-cover"
                src="/chair.png"
                alt="chair"
              />
              <div className="flex w-full items-center justify-between">
                <p>Modern Sofa</p>
                <p className="text-[#515151] font-medium">$124.60</p>
              </div>
              <button className="text-[#064A4A] bg-[#C7EBE8] rounded-full py-1 w-full">
                Buy Now
              </button>
            </div>

            {/* total sales */}
            <div className="absolute top-[28%] left-1 border-[0.5px] border-[#E2E2E2] rounded sales-card bg-white flex flex-col gap-2 font-body p-2 w-[96px]">
              <div className="flex flex-col gap-0.5">
                <h5 className="text-[#515151] text-[5.48px] font-medium">
                  TOTAL SALES
                </h5>
                <div className="w-full flex items-end justify-between">
                  <h4 className="text-xs text-[#064A4A] font-bold">$218</h4>
                  <img src="/chart.svg" alt="chart" />
                </div>
              </div>
              <div className="pt-1 border-t-[0.5px] border-[#C9C9C9] w-full flex items-center justify-between text-[#818181] text-[4.38px]">
                <p>6 total orders</p>
                <p>View report {">"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
