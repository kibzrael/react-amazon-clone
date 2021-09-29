import { Component } from "react";
import { MdShoppingCart } from "react-icons/md";

interface HeaderProps {}

interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
  state = {};
  render() {
    return (
      <div className="h-auto py-4 flex flex-row items-center space-x-4 text-white bg-blue-900 px-7 ">
        <text className="font-bold text-3xl text-left mb-1 ">Amazon</text>
        <input
          type="text"
          className="h-10 w-full px-5 py-3 rounded-full bg-gray-100"
          placeholder="Search Products"
        />
        <text className="whitespace-nowrap align-middle font-semibold">
          Hi, kibzrael
        </text>
        <MdShoppingCart size="42px" className="" />
      </div>
    );
  }
}

export default Header;
