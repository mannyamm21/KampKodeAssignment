import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const DownArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link?: string;
    icon?: JSX.Element;
    dropdownItems?: { name: string; link: string }[];
  }[];
  className?: string;
}) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null); // State to manage the open dropdown
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the hamburger menu

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex w-[90%] max-w-screen-3xl fixed top-10 inset-x-0 mx-auto bg-white shadow-custom-purple-shadow z-[5000] pr-2 pl-8 py-2 items-center justify-between space-x-4 rounded-lg",
          className
        )}
      >
        <h2 className="text-left text-4xl flex-shrink-0">
          <span className="text-purple-600">N</span>
          <span className="text-black">AV</span>
          <span className="text-purple-600">B</span>
          <span className="text-black">AR</span>
        </h2>

        {/* Hamburger Menu Icon */}
        <div className="block md:hidden flex-shrink-0">
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Nav Items for Large Devices */}
        <div className={`hidden md:flex flex-1 justify-center items-center space-x-4 font-bold`}>
          {navItems.map((navItem, idx) => (
            <div key={`nav-item-${idx}`} className="relative">
              <Link
                to={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-black-600 dark:hover:text-neutral-300 hover:text-neutral-500",
                  navItem.dropdownItems ? "cursor-pointer" : ""
                )}
                onClick={() => navItem.dropdownItems && handleDropdownToggle(idx)}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
                {navItem.dropdownItems && (
                  <DownArrowIcon className="ml-2" />
                )}
              </Link>
              {navItem.dropdownItems && openDropdown === idx && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md z-10">
                  {navItem.dropdownItems.map((dropdownItem, i) => (
                    <Link
                      key={`dropdown-item-${i}`}
                      to={dropdownItem.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setOpenDropdown(null)} // Close dropdown on item click
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Buttons for Large Devices */}
        <div className={`hidden md:flex items-center space-x-4 flex-shrink-0`}>
          <button className="border rounded-[5px] bg-[#D6C6E6] text-purple-600 dark:border-white/[0.2] dark:bg-purple-800 dark:text-white text-sm font-medium px-4 py-2">
            <span>Login</span>
          </button>
          <button className="border rounded-[5px] bg-purple-600 text-white dark:border-white/[0.2] text-sm font-medium px-4 py-2">
            <span>SignUp</span>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center md:hidden z-50">
          {navItems.map((navItem, idx) => (
            <div key={`mobile-nav-item-${idx}`} className="relative w-full text-center">
              <Link
                to={navItem.link}
                className={cn(
                  "block py-4 text-black-600 dark:text-neutral-300 hover:text-neutral-500",
                  navItem.dropdownItems ? "cursor-pointer" : ""
                )}
                onClick={() => navItem.dropdownItems && handleDropdownToggle(idx)}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
                {navItem.dropdownItems && (
                  <DownArrowIcon className="ml-2 inline" />
                )}
              </Link>
              {navItem.dropdownItems && openDropdown === idx && (
                <div className="mt-2 w-full bg-white border border-gray-300 shadow-lg rounded-md z-10">
                  {navItem.dropdownItems.map((dropdownItem, i) => (
                    <Link
                      key={`dropdown-item-${i}`}
                      to={dropdownItem.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setMenuOpen(false)} // Close menu on item click
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col space-y-4 mt-4">
            <button className="border rounded-[5px] bg-[#D6C6E6] text-purple-600 dark:border-white/[0.2] dark:bg-purple-800 dark:text-white text-sm font-medium px-4 py-2">
              <span>Login</span>
            </button>
            <button className="border rounded-[5px] bg-purple-600 text-white dark:border-white/[0.2] text-sm font-medium px-4 py-2">
              <span>SignUp</span>
            </button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
