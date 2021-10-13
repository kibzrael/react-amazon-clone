import React from "react";
import Item from "../item";

interface ItemLayoutProps {
  item: Item;
}

export default function ItemLayout(props: ItemLayoutProps) {
  return (
    <div className="flex flex-row w-auto mx-8 my-2 py-2 space-x-8 border-b border-gray-200">
      <div
        className="overflow-hidden"
        style={{
          minWidth: "300px",
          height: "225px",
          maxHeight: "225px",
        }}>
        <img
          src={props.item.photo}
          alt=""
          style={{
            width: "300px",
            height: "225px",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="flex flex-col justify-center space-y-1">
        <p className="font-medium text-xl">{props.item.title}</p>
        <div className="inline-flex items-center">
          <img
            className="w-20 h-8 object-cover"
            src={`assets/rating/rating-${props.item.rating}.svg`}
            alt=""
          />
          <p className="pl-2 text-header">{props.item.rateCount}</p>
        </div>
        <p className="font-medium text-lg text-secondary">Oculus</p>
        <p className="font-medium text-2xl">{"$" + props.item.price}</p>
        <p className="text-gray-500">Ships to Kenya</p>
      </div>
    </div>
  );
}
