import React, { useEffect, useState } from "react";

interface props {
  img: string;
  price: number;
  name: string;
}
const Item: React.FC<props> = ({ img, name, price }) => {
  const imagePath = require(`../../assets/${img}`);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden w-64 h-64 transition-transform duration-300 transform hover:scale-110">
        <img
          src={imagePath}
          alt={name}
          className="object-cover w-full h-full"
        />
        <img src="" alt="" />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm mb-1 mt-5">{name}</div>
        <div>
          {isHovered ? (
            <div className="ease-in duration-150 font-bold underline">{`for only PHP ${price}.00`}</div>
          ) : (
            <div>{`PHP ${price}.00`}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
