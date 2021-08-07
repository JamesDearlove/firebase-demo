import React from "react";
import {
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import MenuBar from "./components/MenuBar";
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";
import { blue, orange } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
