
import { SvgPropsType } from "@utils/types";

export default function FileIcon({ ...svgprops }: SvgPropsType) {
  return (
    <svg
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...svgprops}
    >
      <path
        d="M39 28.5V23.25C39 19.5221 35.9779 16.5 32.25 16.5H29.25C28.0074 16.5 27 15.4926 27 14.25V11.25C27 7.52208 23.9779 4.5 20.25 4.5H16.5M30 28.5L24 22.5M24 22.5L18 28.5M24 22.5L24 34.5M21 4.5H11.25C10.0074 4.5 9 5.50736 9 6.75V41.25C9 42.4926 10.0074 43.5 11.25 43.5H36.75C37.9926 43.5 39 42.4926 39 41.25V22.5C39 12.5589 30.9411 4.5 21 4.5Z"
        stroke="#89898A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
