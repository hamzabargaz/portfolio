import cx from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function section({ children, className }: Props) {
  return (
    <div
      className={cx(
        className,
        "w-full max-w-screen-lg mx-auto my-0 py-0 px-10"
      )}
    >
      {children}
    </div>
  );
}
