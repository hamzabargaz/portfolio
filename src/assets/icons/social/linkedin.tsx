type Props = {
  className?: string;
};
export default function LinkedinIcon({ className }: Props) {
  return (
    <svg
      width='98'
      height='97'
      viewBox='0 0 98 97'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_424_33)'>
        <path
          d='M90.7457 0H7.23516C3.23477 0 0 3.12598 0 6.99082V89.9902C0 93.8551 3.23477 97 7.23516 97H90.7457C94.7461 97 98 93.8551 98 90.0092V6.99082C98 3.12598 94.7461 0 90.7457 0ZM29.0746 82.6584H14.5277V36.356H29.0746V82.6584ZM21.8012 30.0473C17.1309 30.0473 13.3602 26.315 13.3602 21.7113C13.3602 17.1076 17.1309 13.3754 21.8012 13.3754C26.4523 13.3754 30.223 17.1076 30.223 21.7113C30.223 26.2961 26.4523 30.0473 21.8012 30.0473ZM83.5105 82.6584H68.9828V60.1514C68.9828 54.7898 68.8871 47.8748 61.4223 47.8748C53.8617 47.8748 52.7133 53.7289 52.7133 59.7725V82.6584H38.2047V36.356H52.1391V42.6838H52.3305C54.2637 39.0463 59.0106 35.2004 66.0734 35.2004C80.7926 35.2004 83.5105 44.7867 83.5105 57.2527V82.6584Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_424_33'>
          <rect width='98' height='97' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}