import { createTheme } from '@mui/material';

const getTheme = (mode: 'light' | 'dark') => {
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: '#1976d2' },
            background: {
              default: '#ffffff',
              paper: '#f5f5f5',
            },
          }
        : {
            primary: { main: '#90caf9' },
            background: {
              default: '#121212',
              paper: '#1d1d1d',
            },
          }),
    },
  });
  return {
    ...theme,
    custom: {
      gradientBackground:
        mode === 'light'
          ? 'linear-gradient(45deg,#d2dffc 0%,#fcd2e4 100%)'
          : 'linear-gradient(45deg,grey 0%,purple 100%)',
    },
  };
};


export {getTheme} 