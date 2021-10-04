import React from "react";

interface FeedItemProps {
  title: string;
  img: string;
}

interface FeedItemState {}

class FeedItem extends React.Component<FeedItemProps, FeedItemState> {
  state = {};
  render() {
    return (
      <div className="col-span-1 flex flex-col justify-between p-4 bg-gray-50 rounded-sm shadow">
        <p className="font-bold text-xl">{this.props.title}</p>

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
