type Props = {
  className?: string;
};

export default function FacebookIcon({ className }: Props) {
  return (
    <svg
      width='98'
      height='97'
      viewBox='0 0 98 97'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clip-path='url(#clip0_424_35)'>
        <path
          d='M98 48.5C98 21.7142 76.062 0 49 0C21.938 0 0 21.7142 0 48.5C0 72.7074 17.9185 92.7724 41.3438 96.4108V62.5195H28.9023V48.5H41.3438V37.8148C41.3438 25.6595 48.6593 18.9453 59.8518 18.9453C65.2112 18.9453 70.8203 19.8926 70.8203 19.8926V31.8281H64.6417C58.555 31.8281 56.6563 35.567 56.6563 39.4062V48.5H70.2461L68.0736 62.5195H56.6563V96.4108C80.0815 92.7724 98 72.7074 98 48.5Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_424_35'>
          <rect width='98' height='97' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
