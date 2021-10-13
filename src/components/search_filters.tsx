import React, { FunctionComponent } from "react";
import "./navbar.css";

interface SearchFiltersProps {}

interface SearchFiltersState {}

class SearchFilters extends React.Component<
  SearchFiltersProps,
  SearchFiltersState
> {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="filter_section">
          <h1 className="title">Department</h1>
          <p>Any</p>
          <p>Wearable Technology</p>
          <p>Accessories & Supplies</p>
          <p>Cell Phones & Accessories</p>
          <p>Television & Video</p>
          <p>Video Game Accessories</p>
        </div>
        <div className="filter_section">
          <h1 className="title">Customer Review</h1>
          <Rating rating={5} />
          <Rating rating={4} />
          <Rating rating={3} />
        </div>

        <div className="filter_section">
          <h1 className="title">Brands</h1>
          <p>Oculus</p>
          <p>MASiKEN</p>
          <p>Ahroy</p>
          <p>TSANGLIGHT</p>
          <p>CNBEYOUNG</p>
        </div>

        <div className="filter_section">
          <h1 className="title">Price</h1>
          <p>Under $25</p>
          <p>$25 to $50</p>
          <p>$50 to $100</p>
          <p>$100 to $200</p>
          <p>$200 & Above</p>
        </div>

        <div className="filter_section">
          <h1 className="title">Condition</h1>
          <p>New</p>
          <p>Used</p>
        </div>

        <div className="filter_section">
          <h1 className="title">Availability</h1>
          <p>Include Out of Stock</p>
        </div>
      </div>
    );
  }
}

export default SearchFilters;

interface RatingProps {
  rating: number;
}

const Rating: FunctionComponent<RatingProps> = ({ ...props }) => {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <img
        className="w-20 h-8 object-cover"
        src={`assets/rating/rating-${props.rating}.svg`}
        alt=""
      />
      <p>{props.rating + " stars"}</p>
    </div>
  );
};
