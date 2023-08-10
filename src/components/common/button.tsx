import { ButtonPropsType } from "@utils/types";

const Button = ({
  children,
  className,
  disabled,
  ...btnprops
}: ButtonPropsType): React.JSX.Element => (
  <button
    className={`font-roboto py-2.5 px-5 text-sm font-semibold ${
      disabled ? "bg-gray-50" : "bg-primary"
    } rounded-md ${className}`}
    disabled={disabled}
    {...btnprops}
  >
    {children}
  </button>
);

export default Button;
