import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

const THEME = {
  primary: "bg-white border border-gray-300 rounded-md",
  secondary: "bg-transparent",
};

const BOX_SIZE = {
  small: "text-sm px-2 py-1",
  medium: "text-base px-3 py-1",
  large: "text-lg px-4 py-2",
};

export const Dropdown = ({
  label = "Select",
  options = [],
  onSelect,
  startIconClass = "",
  startIcon,
  endIconClass = "",
  endIcon,
  wrapperClassName = "",
  variant = "primary",
  size = "medium",
  selectedValue = null,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(selectedValue);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect?.(option);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`${
        variant === "primary" ? "min-w-[122px] " : "min-w-min"
      } relative z-10 ${THEME[variant]} ${wrapperClassName}`}
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`${
          BOX_SIZE[size]
        } flex items-center justify-center gap-1 w-full
        ${variant === "primary" ? "shadow-sm" : "px-0"}
        hover:border-blue-400
        focus:outline-none`}
      >
        {startIcon && (
          <span className={`flex items-center ${startIconClass}`}>
            {startIcon}
          </span>
        )}
        <span
          className={` ${
            variant === "primary" ? "text-primary-darker" : "text-third-darker"
          }`}
        >
          {selected ? selected.label : label}
        </span>
        {endIcon && (
          <span className={`flex items-center ${endIconClass}`}>{endIcon}</span>
        )}
      </button>

      {open && (
        <ul
          className={`absolute z-1 mt-1 ${
            variant === "primary" ? "w-full" : "w-[122px]"
          } bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto right-0`}
        >
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {option.img && (
                <img
                  alt={option.value}
                  src={`/flags/${option.value}.png`}
                  className="w-5 h-5"
                />
              )}
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      img: PropTypes.bool,
    })
  ),
  onSelect: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  startIconClass: PropTypes.string,
  endIconClass: PropTypes.string,
  wrapperClassName: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  selectedValue: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    img: PropTypes.bool,
  }),
};
