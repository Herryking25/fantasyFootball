import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Lineker from "../assets/image/Lineker.png";
import Sharky from "../assets/image/Sharky2.png";
import Terry from "../assets/image/Terry1.png";
import Clint from "../assets/image/Clint1.png";
import Miniminter from "../assets/image/Miniminter.png";

const fullCards = [Clint, Miniminter, Lineker, Terry, Sharky];

const StackedCards = () => {
  const controls = useAnimation();
  const [cards, setCards] = useState(fullCards);

  useEffect(() => {
    const updateCardCount = () => {
      if (window.innerWidth < 900) {
        setCards(fullCards.slice(-3)); // Show last 3 on smaller screens
      } else {
        setCards(fullCards);
      }
    };

    updateCardCount();
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);

  useEffect(() => {
    async function runAnimation() {
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      });

      setTimeout(() => {
        const isMobile = window.innerWidth < 900;
        const spreadBase = isMobile ? 100 : 180;

        controls.start((i) => {
          const centerIndex = cards.length - 1;
          const offset = centerIndex - i;
          const direction = offset % 2 === 0 ? 1 : -1;
          const spreadDistance = Math.ceil(offset / 2) * spreadBase * direction;
          const rotate = Math.ceil(offset / 2) * 6 * direction;
          const vertical = Math.abs(offset) * 8;

          return {
            x: offset === 0 ? 0 : spreadDistance,
            y: vertical,
            rotate: offset === 0 ? 0 : rotate,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              delay: i * 0.1,
            },
          };
        });
      }, 0);
    }

    runAnimation();
  }, [controls, cards]);

  return (
    <div className="flex justify-center items-center w-full mt-6">
      <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] h-auto min-h-[240px] mx-auto">
        {cards.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            custom={i}
            initial={{ y: 100, opacity: 0, x: 0, rotate: 0 }}
            animate={controls}
            className="absolute top-0 left-1/2 -translate-x-1/2 rounded-lg shadow-xl object-contain"
            style={{
              zIndex: i,
              width: "70vw",        // Responsive width
              maxWidth: "200px",    // Cap on large screens
              height: "auto",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
