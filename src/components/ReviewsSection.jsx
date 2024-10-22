import HeaderSection from "./HeaderSections";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/slider.css";

export default function ReviewsSection() {
  return (
    <>
      <div>
        <HeaderSection
          title="What Our Clients Say"
          text="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        />
      </div>

      {/* slider views */}
      <div className="bg-black pt-10  px-7  md:px-16">
        <Swiper
          grabCursor={true}
          loop={true}
          slidesPerView={1} // Default view for smallest screen sizes
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          breakpoints={{
            // When the screen width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // When the screen width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // When the screen width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className=" border-2 h-[380px]  md:h-[400px] md:w-[440px]  lg:max-w-[400px] lg:max-h-[360px]   md:max-h-[445px] md:max-w-[320px]    border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                Exceptional Service!
              </h3>
              <p className="text-white pt-3 ">
                Our experience with Estatein was outstanding. Their team's
                dedication and professionalism made finding our dream home a
                breeze. Highly recommended!
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy" src={require("../images/Profile-1.png")} alt="review" />
                <div>
                  <p className="text-white">Wade Warren</p>
                  <p className="text-gray-500">USA, California</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border-2 h-[380px] md:h-[400px] md:w-[440px] lg:max-w-[400px] lg:max-h-[360px] md:max-h-[445px] md:max-w-[320px]    border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy" 
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                Efficient and Reliable
              </h3>
              <p className="text-white pt-3 ">
                Estatein provided us with top-notch service. They helped us sell
                our property quickly and at a great price , Their knowledgeable
                team was with us. We couldn't be happier with the results.
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy" src={require("../images/Profile-2.png")} alt="review" />
                <div>
                  <p className="text-white">Emilie Thomson</p>
                  <p className="text-gray-500">USA, Florida</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-2 h-[380px] md:h-[400px] md:w-[440px] md:max-h-[445px] md:max-w-[320px]  lg:max-w-[400px] lg:max-h-[360px]    border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                Trusted Advisors
              </h3>
              <p className="text-white pt-3 ">
                The Estatein team guided us through the entire buying process.
                Their knowledge and commitment to our needs were impressive.
                Thank you for your support!
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy" src={require("../images/Profile-3.png")} alt="review" />
                <div>
                  <p className="text-white">John Mans</p>
                  <p className="text-gray-500">USA, Nevada</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border-2 h-[380px] md:h-[400px] md:w-[440px]  md:max-h-[445px] md:max-w-[320px]  lg:max-w-[400px] lg:max-h-[360px]  border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                /> 
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                Unmatched Experience!
              </h3>
              <p className="text-white pt-3 ">
                Working with Estatein was a game-changer for us. Their team's
                expertise and attention to detail transformed our house-hunting
               We couldn't be happier!
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy"
                  className="rounded-full"
                  src={require("../images/profile-4.png")}
                  alt="review"
                />
                <div>
                  <p className="text-white">Sarah Johnson</p>
                  <p className="text-gray-500">USA, New York</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border-2 h-[380px] md:h-[400px] md:w-[440px]  md:max-h-[445px] md:max-w-[320px]  lg:max-w-[400px] lg:max-h-[360px]  border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                A Seamless Process
              </h3>
              <p className="text-white pt-3 ">
                Our journey with Estatein was remarkable. From the first meeting
                to closing, their commitment and professionalism were evident at
                every step. Highly recommend their services!
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy"
                  className="rounded-full"
                  src={require("../images/profile-5.png")}
                  alt="review"
                />
                <div>
                  <p className="text-white">Michael Brown</p>
                  <p className="text-gray-500">USA, Texas</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border-2 h-[380px] md:h-[400px] md:w-[440px]  md:max-h-[445px] md:max-w-[320px]  lg:max-w-[400px] lg:max-h-[360px]   border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                Exceptional Guidance!
              </h3>
              <p className="text-white pt-3 ">
                Estatein made our home-buying experience incredibly smooth.
                Their knowledgeable team was with us every step of the way,
                Truly a great experience!
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy"
                  className="rounded-full"
                  src={require("../images/profile-6.png")}
                  alt="review"
                />
                <div>
                  <p className="text-white">Emily Davis</p>
                  <p className="text-gray-500">USA, Florida</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border-2 h-[380px] md:h-[400px] md:w-[440px] md:max-h-[445px] md:max-w-[320px]  lg:max-w-[400px] lg:max-h-[360px]  border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                Outstanding Support
              </h3>
              <p className="text-white pt-3 ">
                The team at Estatein went above and beyond to help us find the
                perfect home. Their dedication and responsiveness made all the
                difference in our search. We are grateful for their support
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy"
                  className="rounded-full"
                  src={require("../images/profile-7.png")}
                  alt="review"
                />
                <div>
                  <p className="text-white">Wade Warren</p>
                  <p className="text-gray-500">USA, California</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border-2 h-[380px] md:h-[400px] md:w-[440px]  md:max-h-[445px] md:max-w-[320px]  lg:max-w-[400px] lg:max-h-[360px]  border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                /> 
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                Exceptional Guidance!
              </h3>
              <p className="text-white pt-3 ">
                Estatein made our home-buying experience incredibly smooth.
                Their knowledgeable team was with us every step of the way,
                Truly a great experience!
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy"
                  className="rounded-full"
                  src={require("../images/profile-6.png")}
                  alt="review"
                />
                <div>
                  <p className="text-white">Emily Davis</p>
                  <p className="text-gray-500">USA, Florida</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border-2 h-[380px] md:h-[400px] md:w-[440px] md:max-h-[445px] md:max-w-[320px]  lg:max-w-[400px] lg:max-h-[360px]  border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                Flawless Service
              </h3>
              <p className="text-white pt-3 ">
                Our experience with Estatein was flawless from start to finish.
                They listened to our needs and found us a home that exceeded our
                expectations. We are beyond satisfied!
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy"
                  className="rounded-full"
                  src={require("../images/profile-8.png")}
                  alt="review"
                />
                <div>
                  <p className="text-white">Olivia Thompson</p>
                  <p className="text-gray-500">USA, Washington</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-2 h-[380px] md:h-[400px] md:w-[440px]  md:max-h-[445px] md:max-w-[320px]  lg:max-w-[400px] lg:max-h-[360px]  border-zinc-900 pt-4 md:px-10 px-5 rounded-lg">
              <div className="flex gap-1 py-4 ">
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
                <img loading="lazy"
                  className="w-[25px]"
                  src={require("../images/review.png")}
                  alt="star"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white pt-3">
                Beyond Expectations{" "}
              </h3>
              <p className="text-white pt-3 ">
                Estatein's team was incredibly helpful and patient. They made
                sure we understood every detail of the process and were there
                for us at every turn. We couldn’t have asked for better support!
              </p>
              <div className="flex items-center py-6 absolute gap-2    bottom-0">
                <img loading="lazy"
                  className="rounded-full"
                  src={require("../images/profile-9.png")}
                  alt="review"
                />
                <div>
                  <p className="text-white">James Anderson</p>
                  <p className="text-gray-500"> USA, Colorado</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="slider-controler flex justify-end mt-7 gap-7">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
