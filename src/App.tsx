import React from "react";
import { CssBaseline } from "@material-ui/core";
import MenuBar from "./components/MenuBar";
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <CssBaseline>
      <MenuBar />
      <Timeline />
      <Sidebar />
    </CssBaseline>
  );
}

export default App;
