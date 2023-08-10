import { SvgPropsType } from "@utils/types";

export default function EditIcon({ ...svgprops }: SvgPropsType) {
  return (
    <svg
      fill="none"
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg"
      {...svgprops}
    >
      <path
        d="M14.0514 4.23889L15.4576 2.83265C16.0678 2.22245 17.0572 2.22245 17.6674 2.83265C18.2775 3.44284 18.2775 4.43216 17.6674 5.04235L5.69349 17.0162C5.25292 17.4568 4.70953 17.7806 4.11241 17.9585L1.875 18.625L2.54148 16.3876C2.71936 15.7905 3.04321 15.2471 3.48377 14.8065L14.0514 4.23889ZM14.0514 4.23889L16.25 6.43749"
        stroke="#89898A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
