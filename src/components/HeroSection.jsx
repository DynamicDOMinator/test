import { useEffect, useState } from "react";

export default function HeroSection() {
  const [cards, setCards] = useState([
    { number: "75+", text: "Happy Customers", currentCount: 0 },
    { number: "10k", text: "Properties For Clients", currentCount: 0 },
    { number: "16+", text: "Years of Experience", currentCount: 0 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) =>
        prevCards.map((card) => {
          const target = parseInt(card.number); // Extract the number part only

          if (card.currentCount < target) {
            return { ...card, currentCount: card.currentCount + 1 }; // Increment the number
          } else {
            return card; // Stop incrementing once target is reached
          }
        })
      );
    }, 50);

    return () => clearInterval(interval); // Clear interval when done
  }, []);

  return (
    <div className="flex md:flex-row flex-col-reverse">
      <div className="basis-1/2 flex flex-col lg:px-24 pl-5 items-center justify-center bg-black">
        <p className="text-white  text-2xl  mr-auto  md:text-4xl font-semibold py-2 ">
          Discover Your Dream <br />
          Property with Estatein
        </p>
        <p className="text-gray-400 text-base text-start py-2 ">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>

        <div className="py-7 gap-5 pr-4 lg:pr-0  md:mr-auto flex lg:flex-row flex-col w-full ">
          <button className="text-white bg-transparent border-2 lg:w-[50%] w-full py-4 px-5 rounded-md border-gray-600 hover:bg-white hover:text-black">
            Learn More
          </button>
          <button className="text-white lg:ml-4 bg-violet-700  lg:w-[50%] w-full px-4 py-4 rounded-md ">
            Browse Properties
          </button>
        </div>
        <div className="grid  grid-cols-4 lg:grid-cols-6 pr-4 w-full  md:w-auto lg:grid-rows-2 grid-rows-4 gap-4 lg:pt-5 py-2">
  {cards.map((card, index) => {
    let displayCount = card.currentCount;

    // Apply correct suffix based on card index
    if (index === 0 || index === 2) {
      displayCount = `${card.currentCount}+`; // First and last card get "+"
    } else if (index === 1) {
      displayCount = `${card.currentCount}k`; // Second card gets "k"
    }

    // Set row-span and column-span for each card
    let cardClasses;
    if (index === 0) {
      cardClasses = "col-span-2 row-span-2 "; // First card
    } else if (index === 1) {
      cardClasses = "col-span-2 row-span-2 col-start-3"; // Second card
    } else if (index === 2) {
      cardClasses = "col-span-4 row-span-2 row-start-3 lg:col-span-2 lg:row-start-1 lg:col-start-5"; // Third card
    }

    return (
      <div
        key={index}
        className={`bg-zinc-900 ${cardClasses} px-2 py-4 rounded-lg`}
      >
        <p className="text-white text-2xl text-center font-semibold">
          {displayCount}
        </p>
        <p className="text-gray-400 text-center text-base">{card.text}</p>
      </div>
    );
  })}
</div>

      </div>
      <div className="basis-1/2 ">
        <img
          className=" w-full md:h-[600px] h-[350px]"
          src={require("../images/HeroSection.png")}
          alt="section"
        />
      </div>
    </div>
  );
}
