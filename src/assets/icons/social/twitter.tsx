type Props = {
  className?: string;
};

export default function TwitterIcon({ className }: Props) {
  return (
    <svg
      width='99'
      height='99'
      viewBox='0 0 99 99'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <mask
        id='mask0_424_36'
        // style='mask-type:luminance'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='99'
        height='99'
      >
        <path d='M0.506348 0H99.0001V98.4938H0.506348V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_424_36)'>
        <path
          d='M59.1181 41.6869L95.7861 0H87.0941L55.255 36.193L29.8281 0H0.506348L38.9634 54.7328L0.506348 98.4304H9.19837L42.8107 60.2109L69.6626 98.4304H99.0001L59.1181 41.6869ZM47.2121 55.2078L43.3173 49.7614L12.3332 6.39632H25.6641L50.6794 41.3861L54.59 46.8483L87.0941 92.3349H73.7473L47.2121 55.2078Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
}
