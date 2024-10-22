import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import data from "./ProductsData";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/slider.css";
import HeaderSection from "./HeaderSections";

export default function SliderProducts() {
  const Apartment = useContext(data);

  return (
    <>
      <div className="lg:flex justify-between items-end pb-8 bg-black px-4 lg:pr-16 ">
        <HeaderSection
          title={"Featured Properties"}
          text="Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into 
              exceptional homes and investments available through"
        />

        <button className="text-white md:ml-auto hidden md:block bg-zinc-900 h-[60px] w-[200px] rounded-lg">
          View All Properties
        </button>
      </div>

      {/* products slider starts  */}
      <div className=" bg-black pt-4  px-6 lg:px-16">
        <Swiper
          className=""
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
          {Apartment.map((cart) => (
            <SwiperSlide className="text-white " key={cart.id}>
              {" "}
              <div className="border-2  lg:h-auto max-h-[650]   border-zinc-900 rounded-2xl md:py-8 md:px-5 px-3 py-5 ">
                <img
                  loading="lazy"
                  className="md:h-[277px] h-[220px] w-full"
                  src={cart.img}
                  alt="villa"
                />
                <h2 className="font-semibold md:text-2xl text-lg pt-6">
                  {cart.title}
                </h2>
                <p className="text-gray-400 py-4  ">{cart.desc}</p>
                <div className="flex gap-3 py-2 flex-wrap ">
                  <p className="flex gap-1 mt-2 lg:mt-0 bg-zinc-900 px-3 py-2 rounded-full">
                    <span>
                      <img
                        src={cart.bedRoomIcon}
                        alt="bedRoomIcon"
                        loading="lazy"
                      />
                    </span>{" "}
                    {cart.bedRooms}{" "}
                  </p>
                  <p className="flex gap-1 mt-2 lg:mt-0 bg-zinc-900 px-3 py-2 rounded-full">
                    <span>
                      <img
                        src={cart.bathRoomIcon}
                        alt="bathRoomIcon"
                        loading="lazy"
                      />
                    </span>{" "}
                    {cart.bathRoom}{" "}
                  </p>
                  <p className="flex gap-1 mt-2 lg:mt-0 bg-zinc-900 px-3 py-2 rounded-full">
                    <span>
                      <img src={cart.typeIcon} alt="typeIcon" loading="lazy" />
                    </span>{" "}
                    {cart.type}{" "}
                  </p>
                </div>
                <div className="pt-4">
                  <p>price</p>
                  <div className="md:flex justify-between flex-wrap items-center">
                    <p className="text-2xl font-semibold">{cart.price}</p>
                    <Link to={`/details/${cart.id}`}>
                      {" "}
                      <button className="bg-violet-700 md:px-4 md:py-4 px-3 py-3 mt-3  lg:mt-0 rounded-md text-white">
                        View Property Details
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controler flex justify-end py-4 mt-7 gap-7">
            <div className="swiper-button-prev slider-arrow "></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
