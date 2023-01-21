export default function CardImage({ primary }) {
  if (primary) {
    return (
      <div className="w-11/12 max-w-[380px] sm:max-w-[480px] md:w-full md:max-w-none lg:w-11/12 p-5 relative z-10 after:bg-tertiary-200 after:w-full after:h-[85%] after:absolute after:inset-0 after:z-0 sm:p-8 md:p-4 lg:p-10">
        <div className="relative z-10 bg-white px-3.5 py-[18px] sm:px-5 sm: py-7 md:px-6 md:py-9 flex flex-col gap-[18px] shadow shadow-[rgba(182, 161, 110, 0.19)] font-head lg:gap-[34px] md:shadow-md lg:shadow-lg">
          <div className="flex items-center justify-between pb-4 md:pb-8 border-b-[0.5px] md:border-b border-[#9C9C9C]">
            <h4 className="text-xs text-primary-100 font-medium sm:text-base lg:text-2xl">
              Shopify Bill Payment
            </h4>
            <span className="text-primary-100 text-[7px] font-medium bg-[#EBF7F7] w-4 h-4 flex items-center justify-center block rounded-full sm:w-5 sm:h-5 sm:text-[10px] lg:w-8 lg:h-8 lg:text-base">
              3
            </span>
          </div>
          <div className="grid gap-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div>
                  <img
                    className="w-7 h-auto object-cover rounded-full sm:w-12 lg:w-14"
                    src="/profile-1.png"
                    alt="profile"
                  />
                </div>
                <div>
                  <h5 className="text-[10px] text-black-100 font-medium sm:text-sm sm:mb-0.5 lg:text-lg lg:mb-0.5">
                    Jenny Wilson
                  </h5>
                  <p className="text-[#9C9C9C] text-[7px] sm:text-[10px] lg:text-sm">
                    (629) 555-0129
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-black-100 font-medium sm:text-sm lg:text-lg">
                $739.65
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div>
                  <img
                    className="w-7 h-auto object-cover rounded-full sm:w-12 lg:w-14"
                    src="/profile-2.png"
                    alt="profile"
                  />
                </div>
                <div>
                  <h5 className="text-[10px] text-black-100 font-medium sm:text-sm sm:mb-0.5 lg:text-lg lg:mb-0.5">
                    Terry Robar
                  </h5>
                  <p className="text-[#9C9C9C] text-[7px] sm:text-[10px] lg:text-sm">
                    (612) 675-8829
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-black-100 font-medium sm:text-sm lg:text-lg">
                $475.22
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div>
                  <img
                    className="w-7 h-auto object-cover rounded-full sm:w-12 lg:w-14"
                    src="/profile-3.png"
                    alt="profile"
                  />
                </div>
                <div>
                  <h5 className="text-[10px] text-black-100 font-medium sm:text-sm sm:mb-0.5 lg:text-lg lg:mb-0.5">
                    Pritom Rana
                  </h5>
                  <p className="text-[#9C9C9C] text-[7px] sm:text-[10px] lg:text-sm">
                    (129) 325-0021
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-black-100 font-medium sm:text-sm lg:text-lg">
                $739.65
              </p>
            </div>
          </div>
          <button className="py-2.5 bg-primary-100/10 w-full text-primary-100 font-body font-medium text-[8px] sm:py-4 sm:text-xs lg:py-[22px] lg:text-base">
            Add Manual
          </button>
        </div>

        {/* mini modal */}
        <div className="absolute w-2/5 z-10 -bottom-8 -right-2 px-3.5 py-4 bg-white shadow shadow-[rgba(150, 126, 67, 0.08)] rounded-lg flex flex-col gap-5 font-head text-center sm:gap-8 sm:-right-4 md:w-3/5 ms:shadow-md md:max-w-[200px] lg:px-6 lg:py-8 lg:w-1/2 lg:gap-10 lg:shadow-lg lg:-bottom-10 lg:-right-8 lg:max-w-none">
          <div>
            <h5 className="text-[10px] font-medium text-primary-100 mb-1.5 sm:text-base lg:text-lg lg:mb-2">
              Bill Amount
            </h5>
            <p className="text-black-300 text-[8px] sm:text-xs lg:text-base">
              A fair way to divide bills
            </p>
          </div>
          <h4 className="font-medium text-[18px] text-primary-100 sm:text-2xl lg:text-4xl">
            $739.65
          </h4>
          <button className="bg-[#FFBC9F] text-[8px] text-primary-100 py-2 w-full sm:text-xs sm:py-2.5 lg:text-base lg:py-4">
            Quick Pay
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-11/12 max-w-[380px] sm:max-w-[480px] md:w-full md:max-w-none lg:w-11/12 bg-secondary-200 p-5 flex flex-col gap-2.5 font-body text-primary-100 font-medium">
      <div className="bg-white py-2 px-2.5 flex justify-between items-center rounded-md">
        <div className="flex items-center gap-2">
          <img className="w-3.5 h-auto object-cover" src="/earn-1.svg" alt="earn" />
          <p className="text-[9px]">Total Income</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[9px]">$ 21,746,02</p>
          <img className="w-7 h-auto object-cover" src="/earn-3.svg" alt="earn" />
        </div>
      </div>
      <div className="bg-white py-2 px-2.5 flex justify-between items-center rounded-md">
        <div className="flex items-center gap-2">
          <img className="w-3.5 h-auto object-cover" src="/earn-2.svg" alt="earn" />
          <p className="text-[9px]">Worst Selling</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[9px]">$ 5,369</p>
          <img className="w-7 h-auto object-cover" src="/earn-4.svg" alt="earn" />
        </div>
      </div>
      <div className="bg-white p-4 pb-5 flex flex-col gap-7 rounded-md">
        <div className="flex justify-between items-center">
          <p className="text-[9px]">Total Growth</p>
          <img className="w-2.5 h-auto object-cover" src="/dot.svg" alt="dot" />
        </div>
        <div className="flex justify-between gap-6 items-center">
          <img className="w-full h-auto object-cover" src="/chart.png" alt="chart" />
          <div className="flex flex-col gap-2.5">
            <div>
              <div className="w-2.5 h-0.5 rounded bg-[#FFA882]"></div>
              <p className="text-[9px] font-bold">25,3K</p>
            </div>
            <div>
              <div className="w-2.5 h-0.5 rounded bg-[#80D9AD]"></div>
              <p className="text-[9px] font-bold">+120</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
