import { SvgPropsType } from "@utils/types";

export default function UnverifiedIcon({ ...svgprops }: SvgPropsType) {
  return (
    <svg
      fill="none"
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      {...svgprops}
    >
      <path
        d="M8.625 8.625L12.375 12.375M12.375 8.625L8.625 12.375M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke="#F73B3B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
