import PropTypes from "prop-types";
export const SvgDirectSendOutlineIcon = ({
  size = 24,
  color = "#fff",
  variant = "",
}) => {
  const sizeInPixel = `${size}px`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-library-big-icon lucide-library-big"
      width={sizeInPixel}
      height={sizeInPixel}
      className={variant}
    >
      <rect width={8} height={18} x={3} y={3} rx={1} />
      <path d="M7 3v18" />
      <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
    </svg>
  );
};
SvgDirectSendOutlineIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
};
SvgDirectSendOutlineIcon.defaultProps = {
  size: 18,
  color: "black",
  variant: "",
};
