import { Component, FunctionComponent } from "react";
import { MdShoppingCart, MdSearch } from "react-icons/md";

interface HeaderProps {}

interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
  state = {};

  openCart() {
    console.log("Cart");
  }

  render() {
    return (
      <div className="h-28 md:h-14 flex flex-col justify-between text-white bg-header px-7">
        <div className="h-14 py-1 flex flex-row items-center space-x-7  ">
          <img src="/logo1.png" alt="logo" className="h-10 mt-2" />
          {/* <text className="font-bold text-3xl text-left mb-1 ">Amazon</text> */}
          <SearchField className="hidden md:flex w-full flex-row" />

          <div className="w-full md:w-0"></div>
          <p className="whitespace-nowrap font-semibold">Hi, kibzrael</p>
          <button
            onClick={() => this.openCart()}
            className="flex flex-row space-x-1 items-center">
            <MdShoppingCart size="38px" className="" />
            <p className="font-medium">Cart</p>
          </button>
        </div>
        <SearchField className="flex md:hidden w-full flex-row mb-3" />
      </div>
    );
  }
}

export default Header;

interface SearchFieldProps {
  className: string;
}

const SearchField: FunctionComponent<SearchFieldProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="px-4 py-2 rounded-l bg-gray-200 hover:bg-gray-300 text-gray-700 border-r border-gray-300 ">
        All
      </div>
      <input
        type="text"
        className="h-10 w-full px-5 py-3 bg-gray-100 text-gray-800 focus:outline-none min-w-max"
        placeholder="Search Amazon"
      />
      <MdSearch
        size="56px"
        className="p-2 min-w-max h-10 rounded-r bg-primary cursor-pointer"
      />
    </div>
  );
};
