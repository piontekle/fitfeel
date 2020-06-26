import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Routes from "./routes";

const App = () => {
  document.body.style.background = "#D3D3D3";
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: prefersDarkMode ? "dark" : "light",
        primary: {
          main: "#009688"
        },
        secondary: {
          main: "#ff6e40"
        }
      },
      contrastThreshold: 3,
      tonalOffset: 0.2
    }), [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App;
