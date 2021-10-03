import { Component, FunctionComponent } from "react";
import { MdSearch, MdMenu } from "react-icons/md";
import "./header.css";

interface HeaderProps {}

interface HeaderState {
  name: String;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = { name: "kibzrael" };
    // this.changeName = this.changeName.bind(this);
  }

  openCart() {
    console.log("Cart");
  }

  changeName = () => {
    this.setState({ name: "Raphael" });
  };

  render() {
    return (
      <div className="header">
        <div className="h-14 py-1 flex flex-row items-center">
          <div className="md:hidden w-14 mr-3">
            <MdMenu size="42px" className="cursor-pointer" />
          </div>
          <img src="/logo.png" alt="logo" className="h-10 mt-2" />
          {/* <text className="font-bold text-3xl text-left mb-1 ">Amazon</text> */}
          <SearchField className="hidden ml-7 md:flex w-full flex-row" />

          <div className="w-full md:hidden"></div>
          <p
            onClick={this.changeName}
            className="whitespace-nowrap font-semibold ml-7">
            Hi, {this.state.name}
          </p>
          <button
            onClick={() => this.openCart()}
            className="flex flex-row space-x-1 ml-7 items-center">
            {/* <MdShoppingCart size="38px" className="" /> */}
            <Cart className="w-9 h-9" />
            <p className="hidden sm:block font-medium">Cart</p>
          </button>
        </div>
        <SearchField className="flex md:hidden w-full flex-row mb-3 " />
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

interface CartProps {
  className: string;
}

const Cart: FunctionComponent<CartProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
};
