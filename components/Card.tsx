import clsx from "clsx";

// Card will be displayed as a div with a rounded border, a drop shadow, and a white background
// for our cards.
const Card = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
