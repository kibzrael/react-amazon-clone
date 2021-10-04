import React from "react";
import FeedItem from "./feed_item";
import "./feed.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface HomeFeedProps {}

interface HomeFeedState {
  items: object[];
  covers: string[];
  current: number;
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
    covers: [
      "assets/furniture.jpg",
      "assets/beauty.jpg",
      "assets/computer.jpg",
      "assets/games.jpg",
      "assets/toys.jpg",
      "assets/shipping.jpg",
    ],
    current: 0,
  };

  next = () => {
    var len = this.state.covers.length;
    var next = this.state.current + 1 >= len ? 0 : this.state.current + 1;
    this.setState({
      current: next,
    });
  };

  previous = ()=>{
    var len = this.state.covers.length;
    var previous = this.state.current-1<0? len-1 : this.state.current-1;
    this.setState({
        current:previous
    })
  }

  render() {
    return (
      <div className="relative">
        <img
          src={this.state.covers[this.state.current]}
          alt="funiture"
          className="w-full object-cover object-top"
        />
        <MdKeyboardArrowLeft
          size="56px"
          onClick={this.previous}
          className="absolute top-16 lg:top-24 left-4 text-white rounded-full bg-white bg-opacity-10 cursor-pointer"
        />
        <MdKeyboardArrowRight
          size="56px"
          onClick={this.next}
          className="absolute top-16 lg:top-24 right-4 text-white rounded-full bg-white bg-opacity-10 cursor-pointer"
        />
        <div className="feed">
          <div className="feedItems">
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
