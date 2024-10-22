export default function Footer() {
  return (
    <footer className="bg-black md:pt-20">
      {/* logo with name brand  */}

      <div className="md:flex md:pb-20">
        <div className=" flex flex-col items-start lg:px-20 gap-6 pl-8 pr-2">
          <div className="flex items-center">
            <img src={require("../images/Symbol.png")} alt="logo" />
            <p className="lg:text-4xl text-3xl font-semibold pl-2 text-white">
              Estatein
            </p>
          </div>

          {/* input with the icons  */}

          <div className=" md:w-[350px] w-[300px] py-2 px-6 rounded-md border-2 border-zinc-900  relative bg-black">
            <input
              placeholder="Enter Your Email"
              className="w-full h-full py-2 px-4 text-white bg-black focus:outline-none"
              type="email"
            />
            <div className="absolute  top-1/2 transform -translate-y-1/2 right-2 ">
              <img src={require("../images/send.png")} alt="send-icon" />
            </div>
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <img src={require("../images/mail.png")} alt="mail-icon" />
            </div>
          </div>
        </div>

        {/* Home page section  */}
        <div className=" px-7  md:w-full md:py-0 pt-16 lg:flex flex-wrap  md:px-6 ">
          {" "}
          <div className="flex lg:gap-20 lg:pl-10 justify-between md:full   md:pr-5">
            {" "}
            <div className="md:w-auto w-[40%] border-r-2  md:border-none border-zinc-900">
              <h6 className="text-gray-500">Home</h6>
              <ul className="text-white py-4">
                <li>Hero Section</li>
                <li>Features</li>
                <li>Properties</li>
                <li>Testimonials</li>
                <li>FAQ's</li>
              </ul>{" "}
            </div>
            {/* about us section  */}
            <div className="lg:w-auto  w-[60%]  text-left  pl-4  ">
              <h6 className="text-gray-500">About Us</h6>
              <ul className="text-white py-4">
                <li>Our Story</li>
                <li>Our Works</li>
                <li>How It Works</li>
                <li>Our Team</li>
                <li>Our Clients</li>
              </ul>{" "}
            </div>{" "}
          </div>
          <div className="flex lg:flex-row-reverse   ">
            {" "}
            <div className="lg:flex  lg:pl-5 p-0 lg:w-auto  lg:gap-20  justify-between w-[40%] border-t-2 border-r-2 border-zinc-900 md:border-none  ">
              {/* Properties section  */}
              <div className="text-left py-4 md:p-0">
                <h6 className="text-gray-500">Properties</h6>
                <ul className="text-white py-4">
                  <li>Portfolio</li>
                  <li>Categories</li>
                </ul>{" "}
              </div>

              {/* contact us section  */}
              <div className="text-left md:border-none border-t-2 border-zinc-900  pt-4 md:p-0 ">
                <h6 className="text-gray-500">Contact Us</h6>
                <ul className="text-white py-4">
                  <li>Contact Form</li>
                  <li>Our Offices</li>
                </ul>{" "}
              </div>
            </div>
            {/* Services section  */}
            <div className=" text-left lg:w-auto  w-[60%] border-t-2  border-zinc-900 pl-4 pt-4 md:p-0 md:border-none lg:pl-10  me-auto">
              <h6 className="text-gray-500">Services</h6>
              <ul className="text-white py-4">
                <li>Valuation Mastery</li>
                <li>Strategic Marketing</li>
                <li>Negotiation Wizardry</li>
                <li>Closing Success</li>
                <li>Property Management</li>
              </ul>{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 flex gap-5 lg:gap-0 lg:flex-row flex-col-reverse justify-between items-center md:py-3 lg:px-20">
        <div className="lg:flex gap-10 text-white text-center">
          <p className="py-1 lg:p-0">@2024 Estatein. All Rights Reserved.</p>
          <p className="py-1 lg:p-0">Terms & Conditions</p>
        </div>
        <div className="flex gap-5 pt-2 lg:p-0">
          <img loading="lazy"  src={require("../images/Facebook.png")} alt="Facebook" />
          <img loading="lazy" src={require("../images/Linkedin.png")} alt="linkedin" />
          <img loading="lazy" src={require("../images/Twiter.png")} alt="twitter" />
          <img loading="lazy" src={require("../images/Youtube.png")} alt="Youtube" />
        </div>
      </div>
    </footer>
  );
}
