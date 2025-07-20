import PropTypes from "prop-types";

import { SvgSearchOutlineIcon, SvgNoDataFillIcon } from "@assets/icons";

const BOX_SIZE = {
  small: "text-sm px-2.5 py-1.5",
  medium: "text-base px-3 py-2",
  large: "text-lg px-4 py-3",
};

const LABEL_SIZE = {
  small: "text-sm px-0.5 pb-0.5",
  medium: "text-base px-1 py-1",
  large: "text-lg px-1 py-2",
};

export const Input = (props) => {
  const {
    id,
    className = "",
    size = "medium",
    wrapperClassName = "",
    onChange = () => {},
    type = "text",
    label,
    errorMessage,
    isRequired = false,
    isHaveErrorMessage = false,
    icon,
    ...rest
  } = props;

  return (
    <div
      className={`
      flex flex-col items-center justify-center relative z-0
      ${wrapperClassName}
      `}
    >
      {label && (
        <label
          className={`w-full text-start ${LABEL_SIZE[size]}`}
          id={`label-${id}`}
        >
          {label}
          {isRequired && <sup className="text-red-600 px-1">*</sup>}
        </label>
      )}
      <div className="absolute left-3">{icon}</div>
      <input
        id={`input-${id}`}
        type={type}
        onChange={onChange}
        className={`
           w-full text-start flex-1 items-center justify-center outline-none text-third-darker
           bg-third text-dark rounded-lg border border-third-dark
         focus:text-gray-900
         ${BOX_SIZE[size]}
         ${className}
         ${icon && "!px-10"}
         `}
        {...rest}
      />
      {isHaveErrorMessage && (
        <span className="w-full text-red-500 text-xs text-start h-4 mt-2">
          {errorMessage || ""}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  wrapperClassName: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  isRequired: PropTypes.bool,
  isHaveErrorMessage: PropTypes.bool,
  icon: PropTypes.node,
};
