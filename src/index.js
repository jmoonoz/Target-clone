import { StrictMode } from "react";
import  reactDom  from "react-dom";

import App from "./pages/Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
    rootElement
);
