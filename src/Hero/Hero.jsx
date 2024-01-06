import React, { useEffect, useState } from "react";
import { getRandomData, quote } from "../Utils/Quotes";

function Hero() {
  const [Quote, setQuote] = useState("");
  // setQuote(
  //   getRandomData(quote)
  // )
  useEffect(() => {
    setQuote(getRandomData(quote));
    console.log("quote", Quote);
  }, []);
  return (
    <div>
      <div className="w-full h-screen bg-slate-400 relative">
        {/* <Nav/> */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('../../library.jpg')" }}
        >
          {/* <div className="z-50">
          <Nav/>
          </div> */}
        </div>
        <div className="opacity-70 bg-black  absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold flex-col gap-7">
          <h1>Your personal digital library</h1>
          <p className="text-wrap text-center mx-9 font-light italic text-2xl ">
            {Quote.text}~{Quote.author}
          </p>
        </div>
      </div>

    </div>
  );
}

export default Hero;
