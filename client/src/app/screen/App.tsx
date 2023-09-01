import Header from "../component/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const palletType = darkMode ? "dark" : "light";

  const themeChangeHandler = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header themeChangeHandler={themeChangeHandler} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
