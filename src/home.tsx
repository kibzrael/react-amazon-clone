import React from "react";
import Header from "./components/header";
import NavBar from "./components/navbar";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="md:flex md:flex-row">
          <NavBar />

          <div className="flex-grow bg-white"></div>
          {/* <img src="assets/furniture.jpg" alt="funiture" className="w-8" /> */}
        </div>
      </div>
    );
  }
}

export default Home;
