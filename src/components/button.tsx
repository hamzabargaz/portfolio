import cx from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
  appearance?: "primary" | "secondary" | "none";
  [key: string]: any;
};

export default function CTABtn({
  children,
  className = "",
  appearance = "primary",
  ...props
}: Props) {
  return (
    <button
      className={cx(
        className,
        styles[appearance],
        "px-4 py-2 font-medium rounded-lg hover:bg-opacity-75"
      )}
      {...props}
    >
      {children}
    </button>
  );
}

const styles = {
  primary:
    "bg-light-400 dark:bg-dark-400 border-4 border-light-100 dark:border-dark-100",
  secondary: "bg-white text-black hover:bg-white/50",
  none: "",
};
