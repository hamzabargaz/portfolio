import cx from "classnames";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Title({ children, className = "pr-20" }: Props) {
  return (
    <div className={cx("flex items-end my-3", className)}>
      <span className={cx("text-2xl whitespace-nowrap flex items-center")}>
        {children}
      </span>
      <hr className='ml-2 w-full mb-2 border-primary dark:border-tertiary' />
    </div>
  );
}
