import PropTypes from "prop-types";
export const SvgAddDataIcon = ({ size = 24, color = "#fff", variant = "" }) => {
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
        d="M21.0169 7.99175C21.4148 8.55833 20.9405 9.25 20.2482 9.25H3C2.44772 9.25 2 8.80228 2 8.25V6.42C2 3.98 3.98 2 6.42 2H8.74C10.37 2 10.88 2.53 11.53 3.4L12.93 5.26C13.24 5.67 13.28 5.72 13.86 5.72H16.65C18.4546 5.72 20.0516 6.61709 21.0169 7.99175Z"
        fill={color}
      />
      <path
        d="M21.9834 11.7463C21.9815 11.1953 21.5343 10.7497 20.9834 10.7497L2.99998 10.75C2.44771 10.75 2 11.1977 2 11.75V16.65C2 19.6 4.4 22 7.35 22H16.65C19.6 22 22 19.6 22 16.65L21.9834 11.7463ZM14.5 16.75H12.81V18.5C12.81 18.91 12.47 19.25 12.06 19.25C11.64 19.25 11.31 18.91 11.31 18.5V16.75H9.5C9.09 16.75 8.75 16.41 8.75 16C8.75 15.59 9.09 15.25 9.5 15.25H11.31V13.5C11.31 13.09 11.64 12.75 12.06 12.75C12.47 12.75 12.81 13.09 12.81 13.5V15.25H14.5C14.91 15.25 15.25 15.59 15.25 16C15.25 16.41 14.91 16.75 14.5 16.75Z"
        fill={color}
      />
    </svg>
  );
};
SvgAddDataIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
};
SvgAddDataIcon.defaultProps = {
  size: 18,
  color: "black",
  variant: "",
};
