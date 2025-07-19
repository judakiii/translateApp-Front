import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SvgLinesOutlineIcon, SvgCloseOutlineIcon } from "@assets/icons";

export const Header = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[6dvh] w-full flex items-center justify-between px-4 shadow-md border-b-2">
      <button
        className="z-50"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {!isOpen && <SvgLinesOutlineIcon size={28} color="#2563eb" />}
      </button>

      <div
        className={`fixed z-40 top-0 left-0 h-full w-56 bg-white text-black shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex justify-start p-4">
          {isOpen && (
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <SvgCloseOutlineIcon size={28} color="#2563eb" />
            </button>
          )}
        </div>
        <nav className="w-full fixed z-20 bg-white h-full flex flex-col gap-4 p-6 text-base">
          {list.map((item, index) => {
            return (
              <Link
                key={index}
                className="w-full flex items-center gap-3 bg-white hover:bg-transparent"
                to={item.link}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
};
