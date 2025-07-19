import PropTypes from "prop-types";
export const SvgArrowDownOutlineIcon = ({
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
        d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07999 8.94995"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgArrowDownOutlineIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
};
SvgArrowDownOutlineIcon.defaultProps = {
  size: 18,
  color: "black",
  variant: "",
};
