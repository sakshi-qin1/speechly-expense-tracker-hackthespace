import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./Context/context";

ReactDOM.render(
  <SpeechProvider appId="fdc74bc5-103d-43f3-94ef-c566e36208bc" language="en-US">
  <Provider>
    <App />
  </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
