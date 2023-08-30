import Catalog from '../features/catalog/Catalog';
import Header from '../component/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)
  const palletType = darkMode ? 'dark' : 'light';

  const themeChangeHandler = () => {
    setDarkMode(!darkMode)
  }

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header themeChangeHandler={themeChangeHandler} />
      <Container>
        <Outlet />
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
