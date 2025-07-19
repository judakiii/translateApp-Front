import PropTypes from "prop-types";

export const TransitionBox = ({
  isOpen = false,
  handleClose = () => {},
  children,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
      <div
        className={`
          absolute inset-0 bg-black transition-opacity duration-300
          ${
            isOpen
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={handleClose}
      />

      <div
        className={`
          relative w-full max-w-md bg-white shadow-xl rounded-t-3xl transition-all duration-500 transform
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
          pointer-events-auto
        `}
        style={{ minHeight: "200px" }}
      >
        <div className="flex flex-col justify-center items-center p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

TransitionBox.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};
