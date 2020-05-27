import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Routes from "./routes";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: prefersDarkMode ? "dark" : "light"
      },
      primary: {
        main: "#008B8B"
      },
      secondary: {
        main: "#FF7F50"
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
