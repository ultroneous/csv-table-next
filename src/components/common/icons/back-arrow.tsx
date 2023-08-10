import { SvgPropsType } from "@utils/types";

export default function Backward({ ...svgprops }: SvgPropsType) {
  return (
    <svg
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...svgprops}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L10.1464 2.64645C10.3417 2.45118 10.6583 2.45118 10.8536 2.64645C11.0488 2.84171 11.0488 3.15829 10.8536 3.35355L6.20711 8L10.8536 12.6464C11.0488 12.8417 11.0488 13.1583 10.8536 13.3536C10.6583 13.5488 10.3417 13.5488 10.1464 13.3536L5.14645 8.35355Z"
        fill="#2C71F6"
      />
    </svg>
  );
}
