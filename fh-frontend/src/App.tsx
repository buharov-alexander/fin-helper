import React from 'react';
import './App.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SummaryPage from 'pages/SummaryPage';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Finance
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='main'>
        <SummaryPage />
        <ToastContainer position="bottom-right" theme="dark" hideProgressBar/>
      </div>
    </div>
  );
}

export default App;
