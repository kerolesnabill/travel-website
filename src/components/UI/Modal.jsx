import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="modal">
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ onClose, children }) => {
  const ElementID = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, ElementID)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        ElementID
      )}
    </>
  );
};

export default Modal;
