import PropTypes from "prop-types";

const THEME = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:bg-secondary-dark",
  third: "bg-red-500 text-white hover:bg-red-600",
};

const BOX_SIZE = {
  small: "text-sm py-1.5 px-3",
  medium: "text-base py-2 px-4",
  large: "text-lg py-3 px-6",
};

export const Button = ({
  id,
  variant = "primary",
  size = "medium",
  isFullWidth = false,
  children,
  onClick,
  className = "",
  startIcon,
  endIcon,
  startIconClass = "",
  endIconClass = "",
  disabled = false,
  type = "button",
  ...rest
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`
      flex items-center justify-center gap-1 rounded-lg text-white transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed 
      ${isFullWidth && "!w-full"}
      ${THEME[variant]}
      ${BOX_SIZE[size]}
      ${className}`}
      {...rest}
    >
      {startIcon && (
        <span className={`flex items-center ${startIconClass}`}>
          {startIcon}
        </span>
      )}

      <span className="whitespace-nowrap">{children}</span>

      {endIcon && (
        <span className={`flex items-center ${endIconClass}`}>{endIcon}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "third"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  isFullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  startIconClass: PropTypes.string,
  endIconClass: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
