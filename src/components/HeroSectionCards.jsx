import { useState } from "react";

export default function HeroSectionCards() {
  const [cards, setCards] = useState([
    {
      img: require("../images/cardIcon-1.png"),
      title: "Find Your Dream Home",
    },
    {
      img: require("../images/cardIcon-2.png"),
      title: "Unlock Property Value",
    },
    {
      img: require("../images/cardIcon-3.png"),
      title: "Effortless Property Management",
    },
    {
      img: require("../images/cardIcon-4.png"),
      title: "Smart Investments, Informed Decisions",
    },
  ]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-8 gap-3 px-3 py-3 bg-black border-4  border-zinc-950 ">
      {cards.map((card, index) => {
        // Define a variable for conditional styling
        let cardStyle = "";

        // Apply styles based on the index for large screens
        if (index === 0) {
          cardStyle = "lg:col-span-2 lg:row-span-2";
        } else if (index === 1) {
          cardStyle = "lg:col-span-2 lg:row-span-2 lg:col-start-3";
        } else if (index === 2) {
          cardStyle =
            "lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-1";
        } else if (index === 3) {
          cardStyle = "lg:col-span-2 lg:row-span-2 lg:col-start-7";
        }

        return (
          <div
            key={index}
            className={`bg-zinc-900 px-5 py-4 rounded-lg ${cardStyle}`}
          >
            <img className="mx-auto" src={card.img} alt="card" />
            <p className="text-white text-center py-2">{card.title}</p>
          </div>
        );
      })}
    </div>
  );
}
