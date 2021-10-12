import React from "react";
import HomeFeed from "../components/feed";
import NavBar from "../components/navbar";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  state = {};
  render() {
    return (
      <div className="md:flex md:flex-row">
        <NavBar />

        <div className="flex-grow">
          <HomeFeed />
        </div>
        {/* <img src="assets/furniture.jpg" alt="funiture" className="w-8" /> */}
      </div>
    );
  }
}

export default Home;
