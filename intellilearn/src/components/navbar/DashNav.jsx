import React from "react";
import { IoMdSearch, IoIosNotifications } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const DashNav = ({ className }) => {
  const user = {
    name: "John Doe",
    profilePicture: "/banner2.jpg",
  };
  return (
    <nav className={`bg-gray-100 shadow py-4 sticky top-0 z-50 ${className}`}>
      <div className="mx-auto flex justify-between items-center w-[90%]">
        <div className="flex items-center justify-between gap-6 ">
          <div className="flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <path
                d="M23.2372 10.336C18.9304 10.0298 16.4175 11.4322 15.0864 12.614C13.748 11.418 11.2138 10.0227 6.86428 10.3431C6.76461 10.3502 6.66493 10.3573 6.57239 10.3573L6.88862 7.87172C6.91309 7.67939 7.04159 7.5122 7.22161 7.44021C12.3995 5.36948 17.5245 5.33138 22.5966 7.46602C22.7719 7.53982 22.8964 7.70468 22.9208 7.89335L23.2372 10.336Z"
                fill="#22B286"
              />
              <path
                d="M28.4193 16.7715C26.9243 14.7926 24.5467 13.5113 21.8772 13.5113C19.0581 13.5113 16.5666 14.9421 15.086 17.1062C13.6053 14.9421 11.1137 13.5113 8.29478 13.5113C5.62527 13.5113 3.24757 14.7926 1.74563 16.7715C-0.58932 14.2445 -0.0625447 11.2617 0.400098 9.83795C0.492734 9.54614 0.877078 9.51052 1.03376 9.77399C1.52491 10.6068 2.7778 11.8027 5.9242 11.8098C6.25163 11.8098 6.60044 11.7956 6.97063 11.7672C13.2921 11.2902 15.086 14.7926 15.086 14.7926C15.086 14.7926 16.8799 11.2902 23.2013 11.7672C23.5714 11.7956 23.9202 11.8098 24.2406 11.8098C27.387 11.8027 28.6399 10.6068 29.1312 9.77399C29.2878 9.51052 29.6722 9.54614 29.7647 9.83795C30.2274 11.2617 30.7613 14.2516 28.4193 16.7715V16.7715Z"
                fill="#22B286"
              />
              <path
                d="M17.1715 28.4535C16.9437 29.2507 16.4312 30.1762 15.3136 30.9308C15.1783 31.0232 14.9932 31.0232 14.858 30.9308C13.7403 30.1762 13.2278 29.2507 13 28.4535C13.8115 27.884 14.5234 27.165 15.0858 26.3463C15.6481 27.165 16.36 27.884 17.1715 28.4535V28.4535Z"
                fill="#22B286"
              />
              <path
                d="M21.8773 14.9344C18.1258 14.9344 15.0862 17.9741 15.0862 21.7256C15.0862 25.4772 18.1258 28.5168 21.8773 28.5168C25.6289 28.5168 28.6685 25.4772 28.6685 21.7256C28.6685 17.9741 25.6289 14.9344 21.8773 14.9344ZM21.8773 26.2673C19.3716 26.2673 17.3356 24.2314 17.3356 21.7256C17.3356 19.2198 19.3716 17.1839 21.8773 17.1839C24.376 17.1839 26.4191 19.2198 26.4191 21.7256C26.4191 24.2314 24.376 26.2673 21.8773 26.2673Z"
                fill="#22B286"
              />
              <path
                d="M29.1029 5.52405L27.2591 6.13625V8.69904C27.2591 9.09765 26.9388 9.41091 26.5472 9.41091C26.1557 9.41091 25.8353 9.09765 25.8353 8.69904V6.60611L24.1697 7.1613C23.9775 6.71291 23.6073 6.34272 23.1516 6.15051C20.4679 5.0257 17.713 4.44913 14.9581 4.44913C12.2388 4.44913 9.45525 5.01153 6.69328 6.122C6.24471 6.29997 5.88877 6.63453 5.67527 7.05459L1.06238 5.52406C0.59965 5.3746 0.59965 4.68402 1.06238 4.53455L14.417 0.106754C14.8513 -0.0355845 15.314 -0.0355845 15.7482 0.106754L29.1029 4.53455C29.5655 4.68401 29.5655 5.37458 29.1029 5.52405V5.52405Z"
                fill="#22B286"
              />
              <path
                d="M21.8771 18.6086C20.1544 18.6086 18.7592 20.0039 18.7592 21.7266C18.7592 23.4423 20.1544 24.8446 21.8771 24.8446C23.5928 24.8446 24.9951 23.4423 24.9951 21.7266C24.9951 20.0039 23.5928 18.6086 21.8771 18.6086V18.6086ZM20.9668 21.7312C20.5647 21.7312 20.2374 21.404 20.2374 21.0019C20.2374 20.9837 20.2381 20.9657 20.2394 20.9479C20.2671 20.5709 20.5828 20.2726 20.9668 20.2726C21.3689 20.2726 21.6961 20.5998 21.6961 21.0019C21.6961 21.3974 21.3622 21.7312 20.9668 21.7312Z"
                fill="#22B286"
              />
              <path
                d="M8.29551 18.6085C6.57285 18.6085 5.17761 20.0038 5.17761 21.7265C5.17761 23.4421 6.57285 24.8445 8.29551 24.8445C10.0112 24.8445 11.4136 23.4421 11.4136 21.7265C11.4136 20.0038 10.0112 18.6085 8.29551 18.6085V18.6085ZM7.38516 21.7311C6.98309 21.7311 6.65583 21.4039 6.65583 21.0018C6.65583 20.9836 6.65643 20.9655 6.65783 20.9478C6.68555 20.5708 7.00125 20.2724 7.38516 20.2724C7.78733 20.2724 8.11459 20.5997 8.11459 21.0018C8.11459 21.3972 7.78064 21.7311 7.38516 21.7311V21.7311Z"
                fill="#22B286"
              />
              <path
                d="M8.29568 14.9344C4.54412 14.9344 1.50452 17.9741 1.50452 21.7256C1.50452 25.4772 4.54412 28.5168 8.29568 28.5168C12.0472 28.5168 15.0868 25.4772 15.0868 21.7256C15.0868 17.9741 12.0472 14.9344 8.29568 14.9344V14.9344ZM8.29568 26.2673C5.78989 26.2673 3.75396 24.2314 3.75396 21.7256C3.75396 19.2198 5.7899 17.1839 8.29568 17.1839C10.7943 17.1839 12.8374 19.2198 12.8374 21.7256C12.8374 24.2314 10.7943 26.2673 8.29568 26.2673Z"
                fill="#22B286"
              />
            </svg>
            <h2 className="uppercase text-lg font-bold">IntelliLearn</h2>
          </div>
          <ul className="items-baseline font-roboto  text-md justify-between space-x-4 cursor-pointer md:flex hidden ">
            <li className="relative text-[#080808]/50">
              <Menu>
                <Menu.Button className="flex justify-between w-full items-center gap-1">
                  <div>Category</div>{" "}
                  <div className="flex justify-center items-center mt-1">
                    <FaChevronDown className="w-3 h-3" />
                  </div>
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active ? "bg-[#22B286] text-white" : "text-gray-900"
                          } block px-4 py-2 text-sm`}
                          href="/account-settings"
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active ? "bg-[#22B286] text-white" : "text-gray-900"
                          } block px-4 py-2 text-sm`}
                          href="/documentation"
                        >
                          Documentation
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item disabled>
                      <span className="opacity-75 block px-4 py-2 text-sm">
                        Invite a friend (coming soon!)
                      </span>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </li>
            <li className="text-[#080808]/50">
              <NavLink to="/" className="nav-link" activeclassname="active">
                Teach
              </NavLink>
            </li>
            <li className="text-[#080808]/50">
              <NavLink
                to="/pricing"
                className="nav-link"
                activeclassname="active"
              >
                Pricing
              </NavLink>
            </li>
            <li className="text-[#080808]/50">
              <NavLink
                to="/learnings"
                className="nav-link"
                activeclassname="active"
              >
                My Learning
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            />
            <IoMdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          {/* User Profile and Notification */}
          <div className="flex items-center gap-4">
            {/* User Profile Picture */}
            <div className="flex items-center gap-1">
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm font-extrabold text-[#080808]">
                {user.name}
              </p>
            </div>
            {/* User Name */}
            {/* Notification Bell Icon */}
            <div className="bg-[#22B286]/10 p-2 rounded-lg">
              <IoIosNotifications className="  text-[#22b289] w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
