/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

function Heading() {
  return React.createElement("h1", {}, "안녕!");
}

function ChangeButton() {
  return React.createElement("button", { type: "button" }, "인사말");
}

function Wrapper() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading),
    React.createElement(ChangeButton)
  );
}

const rootElement = document.getElementById("react");
const reactDomRoot = ReactDOM.createRoot(rootElement);

reactDomRoot.render(React.createElement(Wrapper));
