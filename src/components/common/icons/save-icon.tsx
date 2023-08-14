import { SvgPropsType } from "@utils/types";

export default function SaveIcon({ ...svgprops }: SvgPropsType) {
  return (
    <svg
      fill="none"
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg"
      {...svgprops}
    >
      <path
        d="M7.5 7.375H6.25C5.21447 7.375 4.375 8.21447 4.375 9.25V16.75C4.375 17.7855 5.21447 18.625 6.25 18.625H13.75C14.7855 18.625 15.625 17.7855 15.625 16.75V9.25C15.625 8.21447 14.7855 7.375 13.75 7.375H12.5M7.5 10.5L10 13M10 13L12.5 10.5M10 13L10 2.375"
        stroke="#2C71F6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
