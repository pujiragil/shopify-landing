import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
import { useRef } from "react";

export default function Testimonial() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bg-tertiary-300">
      <div className="container mx-auto max-w-[1344px]">
        <div className="px-5 pt-10 pb-[52px] sm:px-10">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="relative"
          >
            <SwiperSlide>
              <div className="flex flex-col gap-[50px] items-center md:flex-row md:items-end lg:gap-44 lg:items-center">
                <img
                  className="w-[300px] md:w-8/12 lg:w-2/5"
                  src="/testimonial.png"
                  alt="testimonial"
                />
                <div className="flex flex-col sm:w-10/12">
                  <SubHead style="mb-[18px] w-9/12 md:w-full">
                    What Our Customers Say
                  </SubHead>
                  <Paragraph style="mb-9">
                    “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    turpis viverra amet elit est proin tgestas neque quis aliq
                    vel. Viverra gravida orci vitae at aliquam sit accums rutrum
                    ut convallis.”
                  </Paragraph>
                  <div className="flex flex-col font-body">
                    <h5 className="text-primary-100 mb-2.5 font-medium">
                      John Carter
                    </h5>
                    <p className="text-black-300">Fashion Shoes Co.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-[50px] items-center md:flex-row md:items-end lg:gap-44 lg:items-center">
                <img
                  className="w-[300px] md:w-8/12 lg:w-2/5"
                  src="/testimonial.png"
                  alt="testimonial"
                />
                <div className="flex flex-col sm:w-10/12">
                  <SubHead style="mb-[18px] w-9/12 md:w-full">
                    What Our Customers Say
                  </SubHead>
                  <Paragraph style="mb-9">
                    “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    turpis viverra amet elit est proin tgestas neque quis aliq
                    vel. Viverra gravida orci vitae at aliquam sit accums rutrum
                    ut convallis.”
                  </Paragraph>
                  <div className="flex flex-col font-body">
                    <h5 className="text-primary-100 mb-2.5 font-medium">
                      John Carter
                    </h5>
                    <p className="text-black-300">Fashion Shoes Co.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="absolute bottom-0 right-0 sm:right-10 z-10 flex items-center gap-6">
              <button
                className="testimonial-button prev"
                ref={navigationPrevRef}
              >
                <img
                  className="w-2 h-4.5 object-cover"
                  src="/arrow-left.svg"
                  alt="arrow"
                />
              </button>
              <button
                className="testimonial-button next"
                ref={navigationNextRef}
              >
                <img
                  className="w-2 h-4.5 object-cover"
                  src="/arrow-right.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
