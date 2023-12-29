import cx from "classnames";

type TCard = {
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "p-4", ...props }: TCard) {
  return (
    <div
      className={cx(
        className,
        "rounded-xl bg-light-200 dark:bg-dark-200"
        // " border border-gray-200 dark:border-[#1e1e1e]"
      )}
    >
      {children}
    </div>
  );
}

type THeader = {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
};

Card.Header = function Header({ children, className = "", ...props }: THeader) {
  return (
    <div className={cx(className, "w-full")} {...props}>
      {children}
    </div>
  );
};
