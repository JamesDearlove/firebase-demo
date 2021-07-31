import React from "react";
import { Container, CssBaseline, Grid } from "@material-ui/core";
import MenuBar from "./components/MenuBar";
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <CssBaseline>
      <MenuBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Timeline />
          </Grid>
          <Grid item xs={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </CssBaseline>
  );
}

export default App;
