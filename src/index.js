import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Grid } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <Grid
      container spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={9}>
        <App />
      </Grid>
    </Grid>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
