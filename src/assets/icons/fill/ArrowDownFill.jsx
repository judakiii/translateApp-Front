import PropTypes from "prop-types";
export const SvgArrowDownFillIcon = ({
  size = 24,
  color = "#fff",
  variant = "",
}) => {
  const sizeInPixel = `${size}px`;
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width={sizeInPixel}
      height={sizeInPixel}
      className={variant}
    >
      <path
        d="M17.92 8.18005H11.69H6.07999C5.11999 8.18005 4.63999 9.34005 5.31999 10.0201L10.5 15.2001C11.33 16.0301 12.68 16.0301 13.51 15.2001L15.48 13.2301L18.69 10.0201C19.36 9.34005 18.88 8.18005 17.92 8.18005Z"
        fill={color}
      />
    </svg>
  );
};
SvgArrowDownFillIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
};
SvgArrowDownFillIcon.defaultProps = {
  size: 18,
  color: "black",
  variant: "",
};
