import PropTypes from "prop-types";

export const TranslatedCard = ({
  key = 0,
  title = "No Title",
  subTitle = "No SubTitle",
  wrapperClassName = "",
}) => {
  return (
    <div
      key={key}
      className={`bg-white w-full flex flex-col justify-center items-start rounded-lg border gap-3 border-third-dark px-4 py-5 text-base ${wrapperClassName}`}
    >
      <span className="text-nowrap">{title}</span>
      <span className="text-nowrap">{subTitle}</span>
    </div>
  );
};

TranslatedCard.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  wrapperClassName: PropTypes.string,
};
