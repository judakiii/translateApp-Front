import PropTypes from "prop-types";
export const SvgNoDataFillIcon = ({
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
        d="M21.0169 7.99175C21.4148 8.55833 20.9405 9.25 20.2482 9.25H3C2.44772 9.25 2 8.80228 2 8.25V6.42C2 3.98 3.98 2 6.42 2H8.74C10.37 2 10.88 2.53 11.53 3.4L12.93 5.26C13.24 5.67 13.28 5.72 13.86 5.72H16.65C18.4546 5.72 20.0516 6.61709 21.0169 7.99175Z"
        fill={color}
      />
      <path
        d="M21.9834 11.7463C21.9815 11.1953 21.5343 10.7497 20.9834 10.7497L2.99998 10.75C2.44771 10.75 2 11.1977 2 11.75V16.65C2 19.6 4.4 22 7.35 22H16.65C19.6 22 22 19.6 22 16.65L21.9834 11.7463ZM14.34 18.28C14.19 18.42 14 18.5 13.81 18.5C13.62 18.5 13.42 18.42 13.28 18.28L12.04 17.04L10.76 18.32C10.62 18.46 10.42 18.54 10.23 18.54C10.04 18.54 9.85 18.46 9.7 18.32C9.41 18.03 9.41 17.55 9.7 17.26L10.98 15.98L9.74 14.74C9.45 14.45 9.45 13.97 9.74 13.68C10.04 13.39 10.51 13.39 10.8 13.68L12.04 14.92L13.24 13.72C13.53 13.43 14 13.43 14.3 13.72C14.59 14.02 14.59 14.49 14.3 14.78L13.1 15.98L14.34 17.22C14.63 17.51 14.63 17.99 14.34 18.28Z"
        fill={color}
      />
    </svg>
  );
};
SvgNoDataFillIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
};
SvgNoDataFillIcon.defaultProps = {
  size: 18,
  color: "black",
  variant: "",
};
