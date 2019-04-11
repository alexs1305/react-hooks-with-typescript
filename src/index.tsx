import * as React from "react";
import { render } from "react-dom";
import MainComponent from "./MainComponent";
import MainComponentHooked from "./MainComponentHooked";
import { BrowserRouter } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    main -
    <MainComponentHooked />
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
