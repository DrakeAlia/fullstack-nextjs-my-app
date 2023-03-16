import clsx from "clsx";

// GlassPane is a component that will be used to wrap other components and give them a glass pane effect.
const GlassPane = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;



// This component will act as our background and be rendered throughout the app, regardless of which route you are on.
// clsx is a utility for constructing className strings conditionally(string maniuplation).
