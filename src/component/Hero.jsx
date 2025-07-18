import React, { useEffect, useState } from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoIosAppstore } from "react-icons/io";
import logoImage from "../assets/image/Logo.png";
// import backgroundImage from "../assets/image/backgroundImage.png";
import backgroundImage from "../assets/image/stadium.jpg";
import MarqueeBanner from "./MarqueeBanner";
import StackedCards from "./StackedCards";
import { Link } from "react-router-dom";



const Hero = () => {
  // const [step, setStep] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setStep((prev) => (prev < 2 ? prev + 1 : 2));
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className=" border-10 border-[#06FF8B] relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center py-4 px-6">
          <img src={logoImage} alt="Fantasy Baller League Logo" className="h-10" />
          <button>
            <Link to="/cardform" className="bg-[#06FF8B] text-black text-sm md:text-lg py-2 px-4 rounded-md hover:bg-[#00FF7F] transition">
              Create Player Card
            </Link>
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-[96px] font-diacloneRegular leading-tight mb-4">
            OWN YOUR OWN BALLER LEAGUE TEAM
          </h1>
          <p className="text-md md:text-xl mb-6 mt-[-20px]">
            Join the experience and become the manager of your very own ballers league team
          </p>

          <StackedCards />
          {/* {step === 2 && <PlayerCards />} */}

          <div className="flex justify-center items-center mt-8 mb-4">
            {/* <button className="bg-white text-[12px] md:text-[24px] text-black py-3 px-4 md:py-3 md:px-8 flex gap-2 items-center justify-center rounded-md">
              <IoLogoGooglePlaystore size={20} />
              Get On PlayStore
            </button> */}
            <button className="bg-[#06FF8B] text-[12px] md:text-[24px] text-black py-3 px-4 md:py-3 md:px-8 flex gap-2 items-center justify-center rounded-md">
              <IoIosAppstore size={20} />
              Get On AppStore
            </button>
          </div>
        </main>

        <div>
          <MarqueeBanner />
        </div>
      </div>
    </div>
  );
};

export default Hero;