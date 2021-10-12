import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Item from "../item";

interface SearchFeedProps {
  results: Item[];
}

interface SearchFeedState {}

class SearchFeed extends React.Component<SearchFeedProps, SearchFeedState> {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="w-full flex flex-row items-center justify-between px-4 py-2 shadow">
          <p>25 Search Results for "Oculus"</p>
          <div className="inline-flex bg-surface border border-gray-300 px-3 py-1 rounded-full">
            <p>Sort by:</p>
            <p className="italic ml-1 font-medium">Featured</p>
            <MdKeyboardArrowDown size="24px" className="mt-px" />
          </div>
        </div>
        {this.props.results.map((item: Item, index: number) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
    );
  }
}

export default SearchFeed;
