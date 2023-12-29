import cx from "classnames";
import { Courgette } from "next/font/google";

type Props = {
  className?: string;
  children: React.ReactNode;
};
const courgette = Courgette({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Title({ children, className = "pr-20" }: Props) {
  return (
    <div className={cx("flex items-end", className)}>
      <span
        className={cx(
          "text-2xl whitespace-nowrap flex items-center",
          courgette.className
        )}
      >
        {children}
      </span>
      <hr className='ml-2 w-full mb-1 border-primary dark:border-tertiary' />
    </div>
  );
}
