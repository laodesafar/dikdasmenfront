import ReactDom from "react-dom";
import { Fragment, useState, useEffect } from "react";

const ModalOverlay = (props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-20 w-full min-h-screen">
      <div onClick={props.onClick}>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <Fragment>
      {isBrowser &&
        ReactDom.createPortal(
          <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
          document.getElementById("overlay")
        )}
    </Fragment>
  );
}
