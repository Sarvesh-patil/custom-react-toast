import Toast from "./Toast";
import "../App.css";
import { useEffect, useRef, useState } from "react";

function ToastStack() {
  const [toasts, setToasts] = useState([]);
  const timer = useRef(null);

  useEffect(() => {
    if (toasts.length > 0) {
      timer.current = setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, 3000);
    }

    return () => {
      clearInterval(timer.current);
      timer.current = null;
    };
  }, [toasts]);

  const onClose = (id) => {
    // Remove the toast with the matching id
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const addToastMessage = () => {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: Date.now(), // Generate a unique ID using Date.now()
        text: `Text for message toast ${prevToasts.length + 1}`,
        onClose: onClose,
        visible: true
      }
    ]);
  };

  return (
    <div className="app">
      <button onClick={addToastMessage}>Show toast message!</button>
      <div className="toast-wrapper">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </div>
  );
}

export default ToastStack;
