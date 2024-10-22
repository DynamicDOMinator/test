import HeaderSection from "./HeaderSections";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import SloganDesign from "./SloganDesign";

export default function QuestionsSlider() {
  return (
    <>
      <div>
        <HeaderSection
          title="Frequently Asked Questions"
          text="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
        />
      </div>

      {/* QA slider  */}
      <div className="bg-black  pt-10  px-7  md:px-16">
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
            <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
              <h3 className="text-white font-semibold text-2xl py-3">
                How do I search for properties on Estatein?
              </h3>
              <p className="text-gray-500 py-3">
                Learn how to use our user-friendly search tools to find
                properties that match your criteria.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
              <h3 className="text-white font-semibold text-2xl py-3">
                What documents do I need to sell my property through Estatein?
              </h3>
              <p className="text-gray-500 py-3">
                Find out about the necessary documentation for listing your
                property with us..
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
              <h3 className="text-white font-semibold text-2xl py-3">
                How can I contact an Estatein agent?
              </h3>
              <p className="text-gray-500 py-3">
                Discover the different ways you can get in touch with our
                experienced agents.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
              <h3 className="text-white font-semibold text-2xl py-3">
                How can I book a property viewing
              </h3>
              <p className="text-gray-500 py-3">
                Click the "Schedule Viewing" button on the property page to book
                a visit and see what you are looking for very simple.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
              <h3 className="text-white font-semibold text-2xl py-3">
                What are the advanced search options?
              </h3>
              <p className="text-gray-500 py-3">
                Use advanced filters like property type, bedrooms, and amenities
                to refine your search.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
              <h3 className="text-white font-semibold text-2xl py-3">
                Can I search for properties with specific features?
              </h3>
              <p className="text-gray-500 py-3">
                Yes, use the features filter to find properties with amenities
                like pools or garages.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
              <h3 className="text-white font-semibold text-2xl py-3">
                How do I get alerts for new listings?
              </h3>
              <p className="text-gray-500 py-3">
                Sign up for email alerts to receive notifications about new
                properties that match your criteria.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
              <h3 className="text-white font-semibold text-2xl py-3">
                Can I compare multiple properties?
              </h3>
              <p className="text-gray-500 py-3">
                Yes, use the "Compare" button to view property details side by
                side from the products slider and read the details for each
                product
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
              <h3 className="text-white font-semibold text-2xl py-3">
                How do I find properties with recent price drops?
              </h3>
              <p className="text-gray-500 py-3">
                Use the "Price Reduced" filter to see listings with recent price
                cuts.
              </p>
            </div>
          </SwiperSlide>
          <div className="slider-controler flex justify-end mt-7 gap-7">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
        </Swiper>
      </div>
      <SloganDesign
        title="Start Your Real Estate Journey Today"
        text="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
      />
    </>
  );
}
