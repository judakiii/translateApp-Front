import PropTypes from "prop-types";
export const SvgPlusOutlineIcon = ({
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
        d="M6 12H18"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V6"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgPlusOutlineIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
};
SvgPlusOutlineIcon.defaultProps = {
  size: 18,
  color: "black",
  variant: "",
};
