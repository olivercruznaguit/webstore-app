import React from "react";
interface props {
  img: string;
  price: string;
  name: string;
}
const Item: React.FC<props> = ({ img, name, price }) => {
  return (
    <div className="flex flex-col items-center">
      <div><img src={img} alt="" className=""/></div>
      <div className="text-sm mb-1">{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default Item;
