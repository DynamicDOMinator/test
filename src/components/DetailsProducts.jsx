import { useContext } from "react";
import data from "./ProductsData";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
// Import Swiper React components

import SloganDesign from "./SloganDesign";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../styles/slider.css";
import "swiper/css/pagination";

export default function DetailsProducts() {
  const productsdata = useContext(data);
  const { id } = useParams();
  const products = productsdata.find((p) => p.id === parseInt(id));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [qaData] = useState([
    {
      id: 1,
      question: "How do I filter properties by price on Estatein?",
      answer:
        "Learn how to use our intuitive filters to find properties within your budget.",
    },
    {
      id: 2,
      question:
        "How can I search for properties with specific amenities on Estatein?",
      answer:
        "Discover how to use our filters to select amenities like pools, gyms, or parking.",
    },
    {
      id: 3,
      question:
        "How do I search for properties in specific locations on Estatein?",
      answer:
        "Find out how to narrow your search by city, neighborhood, or zip code.",
    },
    {
      id: 4,
      question: "How can I view property details on Estatein?",
      answer:
        "Explore our listings to get full details, including photos, price, and features.",
    },
    {
      id: 5,
      question: "How do I save a property on Estatein?",
      answer:
        "Learn how to bookmark properties so you can easily find them later.",
    },
    {
      id: 6,
      question: "How can I compare multiple properties on Estatein?",
      answer:
        "Use our comparison tools to evaluate properties side by side for a better decision.",
    },
    {
      id: 7,
      question: "How do I contact a property agent on Estatein?",
      answer:
        "Discover how to reach out to agents directly from our website to get more details.",
    },
    {
      id: 8,
      question: "How can I schedule a viewing on Estatein?",
      answer:
        "Use our scheduling tool to book an in-person or virtual tour with an agent.",
    },
    {
      id: 9,
      question: "How do I search for rental properties on Estatein?",
      answer:
        "Learn how to toggle between properties for sale and rentals to find your match.",
    },
    {
      id: 10,
      question: "How can I search for recently added listings on Estatein?",
      answer:
        "Discover our “New Listings” filter to see the latest properties on the market.",
    },
    {
      id: 11,
      question: "How do I find pet-friendly properties on Estatein?",
      answer:
        "Use our pet-friendly filter to find homes and apartments that allow pets.",
    },
    {
      id: 12,
      question: "How can I receive property alerts from Estatein?",
      answer:
        "Sign up for alerts to get notified when new properties match your criteria.",
    },
  ]);
  return (
    <>
      <div className="md:px-10 px-5 lg:py-20 py-10 bg-black">
        {products ? (
          <>
            <div className="md:flex  justify-between items-center  md:pb-5 lg:p-0">
              <div className="flex md:flex-row  flex-col   md:items-center items-start gap-5 ">
                <p className="text-3xl font-semibold text-white">
                  Seaside Serenity Villa
                </p>
                <div className="flex  gap-2 py-2 mt-6 md:m-0 bg-zinc-900 border-2 border-zinc-700 items-center px-2 rounded-lg">
                  <img
                    src={require("../images/location-icon.png")}
                    alt={products.address}
                  />
                  <p className="text-white">{products.address}</p>
                </div>
              </div>
              <div className="text-right md:text-left py-6 md:py-0">
                <p className="text-gray-400">Price</p>
                <p className="text-white text-2xl">{products.price}</p>
              </div>
            </div>

            {/* slider  */}

            <div className="bg-zinc-900 py-4 px-4 md:py-10 rounded-lg lg:mt-20 lg:px-10 flex md:flex-col flex-col-reverse ">
              {" "}
              {/* Thumbnail Swiper */}
              <div className="py-5 px-6 bg-zinc-950 rounded-lg mt-10 md:m-0 ">
                {" "}
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={15}
                  slidesPerView={4}
                  breakpoints={{
                    // When the screen width is >= 640px
                    640: {
                      slidesPerView: 4,
                    },
                    // When the screen width is >= 768px
                    768: {
                      slidesPerView: 6,
                    },
                    // When the screen width is >= 1024px
                    1024: {
                      slidesPerView: 8,
                    },
                  }}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {products.gallery.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className="w-[100%] md:h-[94px] h-[50px] rounded-md"
                        src={item}
                        alt={products.title}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Main Swiper */}
              <div className="md:pt-10">
                {" "}
                <Swiper
                  loop={true}
                  slidesPerView={1}
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
                      slidesPerView: 2,
                    },
                  }}
                  spaceBetween={10}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Navigation, Thumbs, Pagination]}
                  className="mySwiper2"
                >
                  {products.gallery.map((item, index) => (
                    <SwiperSlide key={`main-${index}`}>
                      <img
                        className="w-full md:h-[583px] h-[350px] rounded-md"
                        src={item}
                        alt={products.title}
                      />
                    </SwiperSlide>
                  ))}{" "}
                  <div className="lg:flex hidden items-center  ">
                    {" "}
                    <div className="slider-controler hidden mt-10 justify-between gap-5 py-5 px-5 mx-auto lg:flex bg-zinc-800 border-2 border-gray-700  rounded-full">
                      <div className="swiper-button-prev slider-arrow !rounded-full border-2 border-gray-500"></div>

                      <div className="swiper-pagination "></div>

                      <div className="swiper-button-next slider-arrow !rounded-full border-2 border-gray-500"></div>
                    </div>{" "}
                  </div>
                </Swiper>{" "}
              </div>{" "}
            </div>

            {/* features product  */}

            <div className="md:flex mt-10 py-10 gap-6 ">
              {/* description start  */}
              <div className="basis-1/2 h-fit border-2 border-zinc-900 px-6 py-10 rounded-lg">
                {/* text and title start  */}
                <div>
                  <h4 className="text-white text-2xl font-semibold">
                    Description
                  </h4>
                  <p className="text-gray-400 pt-3">{products.details}</p>
                </div>

                {/* end of the text and title  */}

                {/* how many rooms and icons start */}

                <div className="flex flex-wrap lg:flex-nowrap justify-between  mt-10 pt-4 border-t-2 border-zinc-900">
                  <div className="lg:basis-1/3 lg:border-r-2 border-zinc-900 ">
                    <div className="flex gap-2">
                      <img src={products.bedRoomIcon} alt={products.title} />
                      <p className="text-gray-400 ">Bedrooms</p>
                    </div>

                    <p className="text-white py-2">{products.dRoom}</p>
                  </div>
                  <div className="lg:basis-1/3 lg:border-r-2  border-zinc-900 pl-3">
                    <div className="flex gap-2">
                      <img src={products.bathRoomIcon} alt={products.title} />
                      <p className="text-gray-400">Bathrooms</p>
                    </div>
                    <p className="text-white py-2">{products.dBath}</p>
                  </div>
                  <div className="lg:basis-1/3 lg:pl-3">
                    <div className="flex gap-2 ">
                      <img src={products.areaIcon} alt={products.title} />
                      <p className="text-gray-400">Area</p>
                    </div>
                    <p className="text-white py-2">{products.space}</p>
                  </div>
                </div>
              </div>

              {/* features starts  */}
              <div className="basis-1/2 border-2 border-zinc-900 px-6 py-10 rounded-lg mt-6 md:m-0">
                <h4 className="text-white text-2xl font-semibold">
                  Key Features and Amenities
                </h4>

                <div className="pt-6">
                  <div className="flex items-center gap-2 mt-4 bg-zinc-900 py-3 pl-3 border-l-2 border-purple-700">
                    <img
                      src={require("../images/power-Icon.png")}
                      alt="power-icon"
                    />
                    <p className="text-gray-400">
                      Expansive oceanfront terrace for outdoor entertaining
                    </p>
                  </div>

                  <div className="flex items-center  gap-2 mt-4 bg-zinc-900 py-3 pl-3 border-l-2 border-purple-700">
                    <img
                      src={require("../images/power-Icon.png")}
                      alt="power-icon"
                    />
                    <p className="text-gray-400">
                      Gourmet kitchen with top-of-the-line appliances
                    </p>
                  </div>

                  <div className="flex items-center  gap-2 mt-4 bg-zinc-900 py-3 pl-3 border-l-2 border-purple-700">
                    <img
                      src={require("../images/power-Icon.png")}
                      alt="power-icon"
                    />
                    <p className="text-gray-400">
                      Private beach access for morning strolls and sunset views
                    </p>
                  </div>

                  <div className="flex items-center  gap-2 mt-4 bg-zinc-900 py-3 pl-3 border-l-2 border-purple-700">
                    <img
                      src={require("../images/power-Icon.png")}
                      alt="power-icon"
                    />
                    <p className="text-gray-400">
                      Master suite with a spa-inspired bathroom and ocean-facing
                      balcony
                    </p>
                  </div>

                  <div className="flex items-center  gap-2 mt-4 bg-zinc-900 py-3 pl-3 border-l-2 border-purple-700">
                    <img
                      src={require("../images/power-Icon.png")}
                      alt="power-icon"
                    />
                    <p className="text-gray-400">
                      Private garage and ample storage space
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* mail section and the text left side  */}

            <div className="lg:flex gap-10 ">
              <div className="lg:basis-2/5">
                <div className="bg-black  ">
                  <div>
                    <img
                      loading="lazy"
                      className="w-[60px]"
                      src={require("../images/star.png")}
                      alt="star"
                    />
                    <h1 className="text-white text-2xl font-semibold md:text-4xl py-6">
                      Inquire About Seaside Serenity Villa
                    </h1>

                    <p className="text-gray-400  ">
                      Interested in this property? Fill out the form below, and
                      our real estate experts will get back to you with more
                      details, including scheduling a viewing and answering any
                      questions you may have.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:basis-3/5 border-2 border-zinc-900 rounded-md lg:py-10 lg:px-10 md:px-6 md:py-10 md:mt-16 mt-10 px-2 py-8 ">
                <form>
                  <div className=" flex md:gap-10 gap-2 justify-between relative">
                    <label
                      className="text-white w-1/2 text-left"
                      htmlFor="First Name"
                    >
                      First Name
                    </label>
                    <label
                      className="text-white w-1/2 text-left"
                      htmlFor="Last Name"
                    >
                      Last Name
                    </label>
                  </div>
                  <div className="flex md:gap-10 gap-2 pt-6 justify-between">
                    <input
                      className="w-1/2 px-2 md:px-6 py-2 rounded-md bg-zinc-900 outline-none text-white"
                      id="First Name"
                      type="text"
                      placeholder="Enter First Name"
                      required
                    />
                    <input
                      className="w-1/2 px-2 md:px-6 py-2 rounded-md bg-zinc-900 outline-none text-white"
                      id="Last Name"
                      type="text"
                      placeholder="Enter Last Name"
                    />
                  </div>

                  <div className=" flex mt-6 md:gap-10 gap-2  justify-between relative">
                    <label
                      className="text-white w-1/2 text-left"
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <label
                      className="text-white w-1/2 text-left"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                  </div>
                  <div className="flex md:gap-10 gap-2  pt-6 justify-between">
                    <input
                      className="w-1/2 px-2 md:px-6 py-2 rounded-md bg-zinc-900 outline-none text-white"
                      id="Email"
                      type="email"
                      placeholder="Enter First Name"
                      required
                    />
                    <input
                      className="w-1/2 px-2 md:px-6 py-2 rounded-md bg-zinc-900 outline-none text-white"
                      id="phone"
                      type="tel"
                      placeholder="Enter Last Name"
                    />
                  </div>

                  <div className="pt-6">
                    <label htmlFor="5" className="text-white">
                      Selected Property
                    </label>
                    <select
                      id="5"
                      className="w-full mt-6 px-2 md:px-6  py-2 rounded-md bg-zinc-900 text-white"
                    >
                      <option value="Seaside Serenity Villa, Malibu, California">
                        Seaside Serenity Villa, Malibu, California
                      </option>
                      <option
                        value="Oceanview Oasis Villa, Malibu, California, USA
"
                      >
                        Oceanview Oasis Villa, Malibu, California, USA
                      </option>
                      <option
                        value="Sunset Haven, Key West, Florida, USA
"
                      >
                        Sunset Haven, Key West, Florida, USA
                      </option>
                      <option
                        value="Azure Coast Retreat, Maui, Hawaii, USA
"
                      >
                        Azure Coast Retreat, Maui, Hawaii, USA
                      </option>
                      <option
                        value="Malibu Waves Villa, Malibu, California, USA
"
                      >
                        Malibu Waves Villa, Malibu, California, USA
                      </option>
                      <option
                        value="Seabreeze Sanctuary, Laguna Beach, California, USA
"
                      >
                        Seabreeze Sanctuary, Laguna Beach, California, USA
                      </option>
                      <option
                        value="Pacific Paradise Villa, Big Sur, California, USA
"
                      >
                        Pacific Paradise Villa, Big Sur, California, USA
                      </option>
                    </select>
                  </div>
                  <div className="pt-6">
                    <label htmlFor="massage" className="text-white">
                      Massage
                    </label>{" "}
                    <br />
                    <textarea
                      className="w-full h-[200px] bg-zinc-900 resize-none rounded-md mt-6 text-white px-2 py-2 outline-none"
                      required
                      placeholder="Enter your Message here.."
                      name="massage"
                      id="massage"
                    ></textarea>
                  </div>

                  <div className="pt-10 md:flex md:flex-wrap items-center justify-between">
                    <div className="md:pb-6">
                      <input required id="checkbox" type="checkbox" />
                      <label htmlFor="checkbox" className="text-gray-500 pl-2">
                        I agree with Terms of Use and Privacy Policy
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="bg-violet-700 md:px-4 md:py-4 px-3 py-3 mt-4 md:w-auto w-full ml-auto  md:mr-3 lg:mt-0 rounded-md text-white"
                    >
                      Send Your Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* end of the form  */}

            <div className="bg-black  lg:py-16  md:py-12  pt-10  ">
              <div>
                <img
                  loading="lazy"
                  className="w-[60px]"
                  src={require("../images/star.png")}
                  alt="star"
                />
                <h2 className="text-white text-2xl font-semibold md:text-4xl py-6">
                  Comprehensive Pricing Details
                </h2>

                <p className="text-gray-400  ">
                  At Estatein, transparency is key. We want you to have a clear
                  understanding of all costs associated with your property
                  investment. Below, we break down the pricing for Seaside
                  Serenity Villa to help you make an informed decision
                </p>
              </div>
            </div>

            <div className="md:flex items-center lg:gap-20 md:gap-10 px-2 bg-zinc-900 md:py-5 py-3 mt-12 md:m-0 md:px-10 rounded-lg">
              <p className=" text-white text-lg font-semibold md:border-r-2 md:border-b-0 border-b-2 md:px-5 pb-4 md:pb-0 border-zinc-800">
                Note
              </p>
              <p className=" text-gray-400 pt-4 md:p-0">
                The figures provided above are estimates and may vary depending
                on the property, location, and individual circumstances.
              </p>
            </div>

            {/* fees , taxes and last price section  */}

            <div className="lg:flex mt-10">
              <div className="lg:basis-1/5">
                <p className="text-gray-500">Listing Price</p>
                <p className="text-white md:text-3xl text-2xl py-4 font-semibold">
                  {products.price}
                </p>
              </div>

              {/* left side taxes and fees  */}

              <div className="lg:basis-4/5 ">
                {/* start the first section left side  */}

                <div className="border-2 border-zinc-900 px-4 md:mt-5 lg:m-0  lg:px-10 py-10 rounded-md">
                  <p className="text-white text-lg font-semibold pb-10">
                    Additional Fees
                  </p>

                  <div>
                    <div className="md:flex justify-between md:py-10 border-t-2 border-zinc-900">
                      <div className="md:border-r-2 pt-5 md:pt-0 md:pr-5 border-zinc-900 md:basis-1/2">
                        <p className="text-gray-500">Property Transfer Tax</p>
                        <div className="flex items-center gap-2 md:gap-5 md:pt-5 py-6  border-b-2 border-zinc-900   md:border-none ">
                          <p className="text-white text-2xl">$25,000</p>
                          <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2  px-2 rounded-lg md:rounded-lg">
                            Based on the sale price and local regulations
                          </p>
                        </div>
                      </div>

                      <div className="md:pl-4 lg-p-0 py-6 pt-5 md:pt-0 md:basis-1/2">
                        <p className="text-gray-500">Legal Fees</p>
                        <div className="flex items-center gap-5 pt-5 ">
                          <p className="text-white text-2xl">$3,000</p>
                          <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2 px-2 rounded-lg md:rounded-lg">
                            Approximate cost for legal services, including title
                            transfer
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:flex justify-between md:py-10 border-t-2 border-zinc-900">
                      <div className="md:border-r-2 pt-5 md:pt-0 md:pr-5 border-zinc-900 md:basis-1/2">
                        <p className="text-gray-500">Home Inspection</p>
                        <div className="flex items-center gap-2 md:gap-5 md:pt-5 py-6  border-b-2 border-zinc-900   md:border-none ">
                          <p className="text-white text-2xl">$500</p>
                          <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2  px-2 rounded-lg md:rounded-lg">
                            Recommended for due diligence
                          </p>
                        </div>
                      </div>

                      <div className="md:pl-4 lg-p-0 pt-5 md:pt-0 md:basis-1/2 ">
                        <p className="text-gray-500">Property Insurance</p>
                        <div className="flex items-center gap-5 pt-5  py-6">
                          <p className="text-white text-2xl">$1,200</p>
                          <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2 px-2 rounded-lg md:rounded-lg">
                            Annual cost for comprehensive property insurance
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t-2 pt-6 border-zinc-900">
                      <p className="text-gray-500">Mortgage Fees</p>

                      <div className="flex items-center gap-5 pt-5   ">
                        <p className="text-white text-2xl">Varies</p>
                        <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2 px-2 rounded-lg md:rounded-lg">
                          If applicable, consult with your lender for specific
                          details
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* end of the first section left side  */}

                {/* start with the second section left side  */}
                <div className="border-2 border-zinc-900 px-4 mt-5 md:mt-10  lg:px-10 py-10 rounded-md ">
                  <p className="text-white text-lg font-semibold pb-10">
                    Monthly Costs
                  </p>

                  <div className=" lg:pl-0 pt-6 border-t-2 border-zinc-900 ">
                    <p className="text-gray-500">Property Taxes</p>
                    <div className="flex items-center gap-5 py-6 ">
                      <p className="text-white text-2xl">$1,250</p>
                      <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2 px-2 rounded-lg md:rounded-lg">
                        Approximate monthly property tax based on the sale price
                        and local rates
                      </p>
                    </div>
                  </div>

                  <div className=" lg:pl-0 pt-6 border-t-2 border-zinc-900  ">
                    <p className="text-gray-500">Homeowners' Association Fee</p>
                    <div className="flex items-center gap-5 pt-5 ">
                      <p className="text-white text-2xl">$300</p>
                      <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2 px-2 rounded-lg md:rounded-lg">
                        Monthly fee for common area maintenance and security
                      </p>
                    </div>
                  </div>
                </div>

                {/* end of the second section left side  */}

                {/* start the left side third section  */}

                <div className="border-2 border-zinc-900 px-4 mt-5 md:mt-10 lg:px-10 py-10 rounded-md">
                  <p className="text-white text-lg font-semibold pb-10">
                    Total Initial Costs
                  </p>

                  <div>
                    <div className="md:flex justify-between md:py-10 border-t-2 border-zinc-900">
                      <div className="md:border-r-2 pt-5 md:pt-0 md:pr-5 border-zinc-900 md:basis-1/2">
                        <p className="text-gray-500">Listing Price</p>
                        <div className="flex items-center gap-2 md:gap-5 md:pt-5 py-6  border-b-2 border-zinc-900   md:border-none ">
                          <p className="text-white text-2xl">
                            {products.price}
                          </p>
                        </div>
                      </div>

                      <div className="md:pl-4 lg-p-0 pt-5 md:pt-0 md:basis-1/2">
                        <p className="text-gray-500">Additional Fees</p>
                        <div className="flex items-center gap-5 py-6 pt-5 ">
                          <p className="text-white text-2xl">$3,000</p>
                          <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2 px-2 rounded-lg md:rounded-lg">
                            Property transfer tax, legal fees, inspection,
                            insurance
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:flex justify-between md:py-10 border-t-2 border-zinc-900">
                      <div className="md:border-r-2 pt-5 md:pt-0 md:pr-5 border-zinc-900 md:basis-1/2">
                        <p className="text-gray-500">Down Payment</p>
                        <div className="flex items-center gap-2 md:gap-5 md:pt-5 py-6  border-b-2 border-zinc-900   md:border-none ">
                          <p className="text-white text-2xl">$250,000</p>
                          <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2  px-2 rounded-lg md:rounded-lg">
                            20%
                          </p>
                        </div>
                      </div>

                      <div className="md:pl-4 lg-p-0 pt-5 md:pt-0 md:basis-1/2 ">
                        <p className="text-gray-500">Mortgage Amount</p>
                        <div className="flex items-center gap-5 pt-5 ">
                          <p className="text-white text-2xl">$1,000,000</p>
                          <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2 px-2 rounded-lg md:rounded-lg">
                            If applicable
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* end of the third section left side  */}

                {/* start the 4th section left side  */}

                <div className="border-2 border-zinc-900 px-4 mt-5 md:mt-10 lg:px-10 py-10 rounded-md">
                  <p className="text-white text-lg font-semibold pb-10">
                    Monthly Expenses
                  </p>

                  <div>
                    <div className="md:flex justify-between md:py-10 border-t-2 border-zinc-900">
                      <div className="md:border-r-2 pt-5 md:pt-0 md:pr-5 border-zinc-900 md:basis-1/2">
                        <p className="text-gray-500">Property Taxes</p>
                        <div className="flex items-center gap-2 md:gap-5 md:pt-5 py-6  border-b-2 border-zinc-900   md:border-none ">
                          <p className="text-white text-2xl">$1,250</p>
                        </div>
                      </div>

                      <div className="md:pl-4 lg-p-0 pt-5 md:pt-0 md:basis-1/2">
                        <p className="text-gray-500">
                          Homeowners' Association Fee
                        </p>
                        <div className="flex items-center gap-5 py-6 pt-5 ">
                          <p className="text-white text-2xl">$300</p>
                        </div>
                      </div>
                    </div>

                    <div className="md:flex justify-between md:py-10 border-t-2 border-zinc-900">
                      <div className="md:border-r-2 pt-5 md:pt-0 md:pr-5 border-zinc-900 md:basis-1/2">
                        <p className="text-gray-500">Mortgage Amount</p>
                        <div className="flex items-center gap-2 md:gap-5 md:pt-5 py-6  border-b-2 border-zinc-900   md:border-none ">
                          <p className="text-white text-2xl">
                            Varies based on terms
                          </p>
                          <p className="bg-zinc-900  text-gray-400 py-2 lg:px-2 hidden lg:block px-2 rounded-lg md:rounded-lg">
                            If applicable
                          </p>
                        </div>
                      </div>

                      <div className="md:pl-4 lg-p-0 pt-5 md:pt-0 md:basis-1/2 ">
                        <p className="text-gray-500">Property Insurance</p>
                        <div className="flex items-center gap-5 pt-5 ">
                          <p className="text-white text-2xl">$100</p>
                          <p className="bg-zinc-900 text-gray-400 py-2 lg:px-2 px-2 rounded-lg md:rounded-lg">
                            Approximate monthly cost
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of the 4th section left side  */}
              </div>
            </div>
            {/* end of the sections  */}

            <div>
              <div className="bg-black  lg:py-16  md:py-12  pt-10  ">
                <div>
                  <img
                    loading="lazy"
                    className="w-[60px]"
                    src={require("../images/star.png")}
                    alt="star"
                  />
                  <h2 className="text-white text-2xl font-semibold md:text-4xl py-6">
                    Frequently Asked Questions
                  </h2>

                  <p className="text-gray-400  ">
                    Find answers to common questions about Estatein's services,
                    property listings, and the real estate process. We're here
                    to provide clarity and assist you every step of the way.
                  </p>
                </div>
              </div>
            </div>

            {/* QA SLIDER  */}

            <div className="bg-black  pt-10 ">
              <Swiper
                grabCursor={true}
                loop={true}
                slidesPerView={1} // Default view for smallest screen sizes
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
                {qaData.map((slider, index) => (
                  <SwiperSlide key={index}>
                    <div className="border-2 w-full lg:w-full h-[260px] md:w-full md:h-[280px] border-zinc-900 py-7 px-7 rounded-lg">
                      <h3 className="text-white font-semibold text-2xl py-3">
                        {slider.question}
                      </h3>
                      <p className="text-gray-500 py-3">{slider.answer}</p>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="slider-controler flex justify-end mt-7 gap-7">
                  <div className="swiper-button-prev slider-arrow !rounded-full"></div>
                  <div className="swiper-button-next slider-arrow !rounded-full"></div>
                </div>
              </Swiper>
            </div>
          </>
        ) : (
          <p>Your Product Not Found</p>
        )}
      </div>
      <div>
        <SloganDesign
          text="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
          title="Start Your Real Estate Journey Today"
        />
      </div>
    </>
  );
}
