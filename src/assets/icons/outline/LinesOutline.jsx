import PropTypes from "prop-types";
export const SvgLinesOutlineIcon = ({
  size = 24,
  color = "#fff",
  variant = "",
}) => {
  const sizeInPixel = `${size}px`;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      width={sizeInPixel}
      height={sizeInPixel}
      className={variant}
    >
      <path
        d="M3 7H21"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M3 12H21"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};
SvgLinesOutlineIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
};
SvgLinesOutlineIcon.defaultProps = {
  size: 18,
  color: "black",
  variant: "",
};
