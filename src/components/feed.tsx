import React from "react";
import FeedItem from "./feed_item";

interface HomeFeedProps {}

interface HomeFeedState {
  items: object[];
}

class HomeFeed extends React.Component<HomeFeedProps, HomeFeedState> {
  state = {
    items: [
      {
        title: "Amazon Basics",
        img: "assets/items/basics.jpg",
      },
      {
        title: "Electronics",
        img: "assets/items/electronics.jpg",
      },
      {
        title: "Amazon Shipping",
        img: "assets/items/ship.jpg",
      },
      {
        title: "Oculus",
        img: "assets/items/oculus.jpg",
      },
      {
        title: "Computer & Accessories",
        img: "assets/items/computer.jpg",
      },
      {
        title: "Kitchen",
        img: "assets/items/kitchen.jpg",
      },
      {
        title: "Furniture",
        img: "assets/items/furniture.jpg",
      },
      {
        title: "Gaming Accessories",
        img: "assets/items/gaming.jpg",
      },
      {
        title: "Pet Supplies",
        img: "assets/items/pet.jpg",
      },
    ],
  };
  render() {
    return (
      <div className="relative">
        <img src="assets/furniture.jpg" alt="funiture" className="" />
        <div className="absolute top-28 p-6 sm:top-32 md:top-28 lg:top-36 xl:top-40 2xl:top-44 flex flex-grow w-full">
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-6">
            {this.state.items.map((item, index) => {
              return <FeedItem key={index} img={item.img} title={item.title} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFeed;
