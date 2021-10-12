import React from "react";
import "./feed.css";

interface FeedItemProps {
  title: string;
  img: string;
}

interface FeedItemState {}

class FeedItem extends React.Component<FeedItemProps, FeedItemState> {
  state = {};
  render() {
    return (
      <div className="feedItem">
        <p className="font-bold text-xl whitespace-nowrap overflow-hidden object-scale-down">
          {this.props.title}
        </p>

        <div className="aspect-w-1 aspect-h-1 ">
          <img
            src={this.props.img}
            alt={this.props.img + ` image`}
            className="py-2 aspect-w-1 aspect-h-1 object-cover"
          />
        </div>
        <p className="text-secondary">See More</p>
      </div>
    );
  }
}

export default FeedItem;
