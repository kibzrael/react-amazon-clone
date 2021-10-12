import React from "react";
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
          <p className="title">Department</p>
          <p>Any</p>
          <p>Wearable Technology</p>
          <p>Accessories & Supplies</p>
          <p>Cell Phones & Accessories</p>
          <p>Television & Video</p>
          <p>Video Game Accessories</p>
        </div>
        <div className="filter_section">
          <p className="title">Customer Review</p>
        </div>

        <div className="filter_section">
          <p className="title">Brands</p>
          <p>Oculus</p>
          <p>MASiKEN</p>
          <p>Ahroy</p>
          <p>TSANGLIGHT</p>
          <p>CNBEYOUNG</p>
        </div>

        <div className="filter_section">
          <p className="title">Price</p>
          <p>Under $25</p>
          <p>$25 to $50</p>
          <p>$50 to $100</p>
          <p>$100 to $200</p>
          <p>$200 & Above</p>
        </div>

        <div className="filter_section">
          <p className="title">Condition</p>
          <p>New</p>
          <p>Used</p>
        </div>

        <div className="filter_section">
          <p className="title">Availability</p>
          <p>Include Out of Stock</p>
        </div>
      </div>
    );
  }
}

export default SearchFilters;
