export default function CardImage() {
  return (
    <div className="p-5 relative z-10 after:bg-tertiary-200 after:w-full after:h-[85%] after:absolute after:inset-0 after:z-0">
      <div className="relative z-10 bg-white px-3.5 py-[18px] md:px-6 md:py-9 flex flex-col gap-[18px] shadow-sm shadow-[rgba(182, 161, 110, 0.19)] font-head">
        <div className="flex items-center justify-between pb-4 md:pb-8 border-b-[0.5px] md:border-b border-[#9C9C9C]">
          <h4 className="text-xs text-primary-100 font-medium">
            Shopify Bill Payment
          </h4>
          <span className="text-primary-100 text-[7px] font-medium bg-[#EBF7F7] w-4 h-4 flex items-center justify-center block rounded-full">
            3
          </span>
        </div>
        <div className="grid gap-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div>
                <img
                  className="w-7 h-auto object-cover rounded-full"
                  src="/profile-1.png"
                  alt="profile"
                />
              </div>
              <div>
                <h5 className="text-[10px] text-black-100 font-medium">
                  Jenny Wilson
                </h5>
                <p className="text-[#9C9C9C] text-[7px]">(629) 555-0129</p>
              </div>
            </div>
            <p className="text-[10px] text-black-100 font-medium">$739.65</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div>
                <img
                  className="w-7 h-auto object-cover rounded-full"
                  src="/profile-2.png"
                  alt="profile"
                />
              </div>
              <div>
                <h5 className="text-[10px] text-black-100 font-medium">
                  Terry Robar
                </h5>
                <p className="text-[#9C9C9C] text-[7px]">(612) 675-8829</p>
              </div>
            </div>
            <p className="text-[10px] text-black-100 font-medium">$475.22</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div>
                <img
                  className="w-7 h-auto object-cover rounded-full"
                  src="/profile-3.png"
                  alt="profile"
                />
              </div>
              <div>
                <h5 className="text-[10px] text-black-100 font-medium">
                  Pritom Rana
                </h5>
                <p className="text-[#9C9C9C] text-[7px]">(129) 325-0021</p>
              </div>
            </div>
            <p className="text-[10px] text-black-100 font-medium">$739.65</p>
          </div>
        </div>
        <button className="py-2.5 bg-primary-100/10 w-full text-primary-100 font-body font-medium text-[8px]">
          Add Manual
        </button>
      </div>
    </div>
  );
}
