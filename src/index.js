import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { theme } from './theme'
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthContextProvider } from './context/AuthContext';


ReactDOM.render(
<AuthContextProvider>
  <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
</AuthContextProvider>,
  document.getElementById('root')
);
