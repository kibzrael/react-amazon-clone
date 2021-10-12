import React from "react";
import SearchFeed from "../components/search_feed";
import SearchFilters from "../components/search_filters";
import Item from "../item";

interface SearchProps {}

interface SearchState {
  results: Item[];
}

class Search extends React.Component<SearchProps, SearchState> {
  state = {
    results: [
      new Item({
        title:
          "Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB",
        price: 399,
        rating: 4.7,
        rateCount: 3891,
        photo: "assets/search/oculus 1.jpg",
      }),
      new Item({
        title: "Oculus Rift S PC-Powered VR Gaming Headset",
        price: 399,
        rating: 4.7,
        rateCount: 3891,
        photo: "assets/search/oculus 2.jpg",
      }),
      new Item({
        title:
          "Oculus Quest 2 Case SARLAR Hard Carrying Case for Oculus Quest 2/Elite Version VR Gaming Headset and Touch Controllers Accessories, Suitable for Travel and Home Storage.",
        price: 26,
        rating: 4.7,
        rateCount: 3891,
        photo: "assets/search/oculus 3.jpg",
      }),
      new Item({
        title:
          "X-super Home Universal Desktop VR Headset Stand for Oculus Quest 2 ,Quest Rifts, Go, HTC Cosmos, Fits Touch Controllers Holder Virtual Reality Station Accessories",
        price: 24,
        rating: 4.7,
        rateCount: 3891,
        photo: "assets/search/oculus 4.jpg",
      }),
      new Item({
        title: "Oculus Rift - Virtual Reality Headset",
        price: 399,
        rating: 4.7,
        rateCount: 3891,
        photo: "assets/search/oculus 5.jpg",
      }),
    ],
  };
  render() {
    return (
      <div className="md:flex md:flex-row">
        <SearchFilters />
        <div className="flex-grow">
          <SearchFeed results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Search;
