import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// import data
import { slider } from "../data";

const TestimonialSlider = () => {
  return (
    <section class="bg-white py-1 lg:py-[20px]">
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="flex flex-wrap justify-center items-center">
              <a
                href="javascript:void(0)"
                class="
                    w-[150px]
                    2xl:w-[180px]
                    py-5
                    flex
                    items-center
                    justify-center
                    mx-4
                    "
              >
                <img
                  src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1MmB8?ver=6c43g"
                  alt="image"
                  class="w-full h-10"
                />
              </a>
              <a
                href="javascript:void(0)"
                class="
                    w-[150px]
                    2xl:w-[180px]
                    py-5
                    flex
                    items-center
                    justify-center
                    mx-4
                    "
              >
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
                  alt="image"
                  class="w-full h-10"
                />
              </a>
              <a
                href="javascript:void(0)"
                class="
                    w-[150px]
                    2xl:w-[180px]
                    py-5
                    flex
                    items-center
                    justify-center
                    mx-4
                    "
              >
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.gyIA9pwhPIZDAb5t8PfiqAHaCl"
                  alt="image"
                  class="w-full h-10"
                />
              </a>
              <a
                href="javascript:void(0)"
                class="
                    w-[150px]
                    2xl:w-[180px]
                    py-5
                    flex
                    items-center
                    justify-center
                    mx-4
                    "
              >
                <img
                  src="https://logodownload.org/wp-content/uploads/2017/03/gopro-logo-13.png"
                  alt="image"
                  class="w-full h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
