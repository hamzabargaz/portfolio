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
        "rounded-xl border border-[#1e1e1e] bg-gray-200 dark:bg-[#171717]"
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
