import React, { FunctionComponent } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdLanguage,
  MdPerson,
  MdTune,
} from "react-icons/md";
import "./navbar.css";

interface NavBarProps {}

interface NavBarState {}

class NavBar extends React.Component<NavBarProps, NavBarState> {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="flex flex-row items-center space-x-4 justify-center mb-6">
          <img
            src="assets/profile.jpg"
            alt="profile"
            className="w-16 h-16 object-cover object-top rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-gray-600 font-medium">Hello,</p>
            <p className="font-semibold text-lg ">kibzrael</p>
          </div>
        </div>
        <div className="section">
          <p className="title">Digital Content & Devices</p>
          <ListItem text="Amazon Music" />
          <ListItem text="Kindle E-readers & Books" />
          <ListItem text="Appstore for Android" />
        </div>
        <div className="section">
          <p className="title">Shop By Department</p>
          <ListItem text="Electronics" />
          <ListItem text="Computers" />
          <ListItem text="Smart Home" />
          <ListItem text="Arts & Craft" />
          <div className="inline-flex items-center bg-gray-100 rounded-full px-2 py-px border border-gray-200">
            <p className="font-medium text-lg pb-1 text-gray-500">See All</p>
            <MdKeyboardArrowDown size="24px" />
          </div>
        </div>
        <div className="section">
          <p className="title">Help & Settings</p>
          <div className="settings">
            <MdLanguage size="24px" />
            <p>English</p>
          </div>
          <div className="settings">
            <MdTune size="24px" />
            <p>Settings</p>
          </div>
          <div className="settings">
            <MdPerson size="24px" />
            <p>Account</p>
          </div>
        </div>
        <button className="text-center bg-secondary px-4 py-2 mx-4 rounded-full text-white font-medium">
          Log Out
        </button>
      </div>
    );
  }
}

export default NavBar;

interface ListItemProps {
  text: string;
}

const ListItem: FunctionComponent<ListItemProps> = (props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="whitespace-nowrap">{props.text}</p>
      <MdKeyboardArrowRight size="24px" className="text-gray-500 ml-2" />
    </div>
  );
};
