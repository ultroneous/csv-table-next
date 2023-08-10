import { SvgPropsType } from "@utils/types";

export default function ImportIcon({ ...svgprops }: SvgPropsType) {
  return (
    <svg
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...svgprops}
    >
      <path
        d="M7.5 6.875H6.25C5.21447 6.875 4.375 7.71447 4.375 8.75V16.25C4.375 17.2855 5.21447 18.125 6.25 18.125H13.75C14.7855 18.125 15.625 17.2855 15.625 16.25V8.75C15.625 7.71447 14.7855 6.875 13.75 6.875H12.5M12.5 4.375L10 1.875M10 1.875L7.5 4.375M10 1.875L10 12.5"
        stroke="#202020"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

