import React from "react";
import "../component/Loader.css";

function Loader({ size = 80, color = "#4fa94d", type = "clip" }) {
  const spinnerStyle = {
    "--spinner-size": `${size}px`,
    "--spinner-color": color,
  };

  const renderSpinner = () => {
    switch (type) {
      case "clip":
        return <div className="clip-loader" style={spinnerStyle}></div>;
      case "bounce":
        return <div className="bounce-loader" style={spinnerStyle}></div>;
      case "pulse":
        return (
          <div className="pulse-loader" style={spinnerStyle}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        );
      case "grid":
        return (
          <div className="grid-loader" style={spinnerStyle}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        );
      default:
        return <div className="clip-loader" style={spinnerStyle}></div>;
    }
  };

  return (
    <div className="loader-container">
      {renderSpinner()}
    </div>
  );
}

export default Loader;