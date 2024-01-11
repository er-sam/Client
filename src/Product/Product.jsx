import React, { useRef, useState } from "react";
// import { product } from "../Utils/Product";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Product({ product }) {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true)
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  const [data, setdata] = useState(product);
  return (
    <>
      <div className="flex overflow-x-auto gap-6 bg-white rounded-md mx-1 my-4 py-1 px-4 ">
        <div className="absolute flex-row right-10">
          <div className="flex gap-4 items-center">
            <p>See All</p>
            <FaAngleLeft
            onSelect={() => {
              handleHorizantalScroll(elementRef.current, 25, 100, -10);
            }}
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 25, 100, -10);
              }}
              disabled={arrowDisable}
              className="bg-amber-300"
              size={25}
            />
            <FaAngleRight
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 25, 100, 10);
              }}
              className="bg-amber-300"
              size={25}
            />
          </div>
        </div>

        {data.map((data) => (
          <div
            key={data.id}
            className="bg-white rounded-md my-10 mx-2 min-w-56 py-3 px-3 shadow-xl"
          >
            <img src={data.image} className="w-40 h-40 bg-contain" />
            <h4 className="text-slate-800 font-medium text-sm">{data.pname}</h4>

            <div className="flex justify-between my-1 mx-2 items-center">
              <p className="font-mono text-orange-300">{data.bname}</p>
              <p className="font-bold text-sm px-2 py-1 rounded bg-yellow-400 bg-opacity-15 text-black">
                $ {data.price} <span className="opacity-25">-80%</span>
              </p>
            </div>
            <div className="bg-amber-400 text-center py-1 mt-2 rounded-sm hover:bg-opacity-25 ease-in duration-300 cursor-pointer">
              <p className="font-semibold">Add Cart</p>
            </div>
          </div>
        ))}

        {/* <div className="bg-white rounded-md my-5 mx-6 max-w-56 py-3 px-2 shadow-xl">
        <img src="../../product.jpg" className="w-40 h-40 bg-contain" />
        <h4 className="text-slate-800 font-medium text-sm">
          Red Tape Men Walking Shoes alking Shoes alking Shoes
        </h4>

        <div className="flex justify-between my-1 mx-2 items-center">
          <p className="font-mono text-orange-300">Red-Tape</p>
          <p className="font-bold text-sm px-2 py-1 rounded bg-yellow-400 bg-opacity-15 text-black">
            $ 70000 <span className="opacity-25">-80%</span>
          </p>
        </div>
        <div className="bg-amber-400 text-center py-1 mt-2 rounded-sm hover:bg-opacity-25 ease-in duration-300 cursor-pointer">
            <p className="font-semibold">Add Cart</p>
        </div>
      </div> */}
      </div>
    </>
  );
}

export default Product;
