import cx from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function section({ children, className }: Props) {
  return <div className={cx(className, "w-full")}>{children}</div>;
}
