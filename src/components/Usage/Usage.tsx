import "./Usage.css";
import { FC } from "react";
import SweetAlert from "sweetalert2";
import { FiHelpCircle } from "react-icons/fi";

const Usage: FC = () => {
  const showModal = () => {
    SweetAlert.fire({
      title: "Usage",
      text: "Each pad can be activated one at a time by pressing the corresponding number on your keyboard.",
      icon: "info",
      iconColor: "lightgray",
      confirmButtonColor: "#0b0b0b",
    });
  };

  return (
    <button className='usage centered' onClick={() => showModal()}>
      <FiHelpCircle strokeWidth={1} />
    </button>
  );
};

export default Usage;
