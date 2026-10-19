import React from "react";
import ReactDOM from "react-dom/client";


// React Styling Practice
/* 
const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>
);
*/

// React Component Practice
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);