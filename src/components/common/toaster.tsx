import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toaster() {
  return <ToastContainer />;
}

export const showToastMessage = (
  msg: string,
  { color }: { color: TypeOptions }
) => {
  toast(msg, {
    type: color,
    position: toast.POSITION.TOP_RIGHT,
  });
};

showToastMessage.defaultProps = {
  color: "info",
};
