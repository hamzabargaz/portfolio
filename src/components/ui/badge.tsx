import React from "react";
import cx from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
};

export default function Badge({
  className,
  variant = "default",
  ...props
}: Props) {
  const variants: any = {
    default:
      "border-transparent bg-light-200 dark:bg-dark-200 hover:bg-light-200/80 hover:dark:bg-dark-200/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",

    outline: "text-foreground",
  };

  return (
    <div
      className={cx(
        className,
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors whitespace-nowrap",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant]
      )}
      {...props}
    />
  );
}
