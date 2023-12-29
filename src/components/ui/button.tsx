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
        "px-4 py-2 font-medium rounded-xl"
      )}
      {...props}
    >
      {children}
    </button>
  );
}

const styles = {
  primary: cx(
    "border border-transparent dark:hover:!border-light-400 hover:!border-dark-400",
    "bg-dark-400  dark:bg-light-400 hover:!bg-transparent ",
    "text-light-400 dark:text-dark-400 dark:hover:text-light-400 hover:text-dark-400"
  ),
  secondary: cx(
    "text-dark-400 dark:text-light-400 hover:bg-dark-400/5 dark:hover:bg-light-400/10"
  ),
  none: "",
};
