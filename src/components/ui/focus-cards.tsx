import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link to={card.dest}>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-40 md:h-64  transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && ""
        )}
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/30 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-95" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    </Link>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  dest: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (<>



    <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto md:px-8 w-[85%]">


      {cards.map((card, index) => (

        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  </>
  );
}