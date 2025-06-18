"use client"
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import Image from "next/image";
import DynamicWrapper from "../Components/DynamicWrapper";

export default function Page() {
    const [numb, setNum] = useState(0);
    const increment = () => setNum(numb + 1);
    const decrement = () => setNum(numb - 1);

  const products = Array.from({ length: 28 }, (_, i) => ({
    name: "Erythromycin",
    price: 16864,
    image: i % 2 === 0 ? "one.png" : "two.png",
    btn: i % 2 === 0 ? <button className="bg-[#5B5B5B] text-white text-xs px-4 py-1 rounded-full hover:bg-gray-800 transition w-full">Add to Cart </button>
                :
                <div className="w-full">
                    <span onClick={increment}>{AiOutlinePlus}</span>
                    <span>{numb}</span>
                    <span onClick={decrement}>{AiOutlineMinus}</span>
                </div>
  }));

  return (
    <DynamicWrapper> 
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-6 gap-4 p-4 bg-[#F4FBF8]">
      {products.map((product, index) => {
        const { name, price, image, btn} = product;

        return (
          <div
            key={index}
            className="w-43 h-45 rounded-lg shadow-[0px_5px_25px_0px_#0000000D] bg-white p-2 flex flex-col items-center text-center "
          >
            {/* <img
              src={image}
              alt={name}
              className="h-24 w-24 object-cover mb-2"
            /> */}
            <Image
              src={`/${image}`}
              alt={name}
              width={96}
              height={96}
              className="h-24 w-24 object-cover mb-2"
            />
            <h2 className="text-base font-semibold text-[#1A1A1A] font-poppins">{name}</h2>
            <p className="text-sm text-[#5B5B5B] font-medium mb-2">₦{price.toLocaleString()}</p>
            <div className="lg:max-w-[150px]">
                {btn}

                </div>

          </div>
        );
      })}
    </div>
    </DynamicWrapper>
  );
}
