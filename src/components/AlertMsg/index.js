import React from "react";
import { Toaster } from "react-hot-toast";

const AlertMsg = () => {
  return (
    <Toaster
      position='top-right'
      reverseOrder={false}
      gutter={8}
      containerClassName=''
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 3000,
        style: {
          background: "#363636",
          color: "#fff",
        },
      }}
    />
  );
};

export default AlertMsg;
