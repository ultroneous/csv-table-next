import { SvgPropsType } from "@utils/types";

export default function ActionIcon({ ...svgprops }: SvgPropsType) {
  return (
    <svg
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...svgprops}
    >
      <path
        d="M11.2817 16.2539L10.2626 12.4505M10.2626 12.4505L8.38057 14.1195L8.80688 7.01717L12.7272 12.9548L10.2626 12.4505ZM4.62478 12.2502C2.20841 9.83385 2.20841 5.91615 4.62478 3.49978C7.04115 1.08341 10.9589 1.08341 13.3752 3.49978C14.5834 4.70793 15.1875 6.29141 15.1875 7.87489M6.21577 10.6592C4.67808 9.12154 4.67808 6.62846 6.21577 5.09077C7.75346 3.55308 10.2465 3.55308 11.7842 5.09077C12.5531 5.8596 12.9375 6.86728 12.9375 7.87495"
        stroke="#202020"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


