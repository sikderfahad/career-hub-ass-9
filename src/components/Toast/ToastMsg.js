import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMsg = () => {
  toast.warn("You already applied this job!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export { ToastMsg };
