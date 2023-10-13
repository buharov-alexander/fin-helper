import React from 'react';
import './App.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SummaryPage from 'pages/SummaryPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SummaryPage />,
  },
  {
    path: "/accounts/:id",
    element: <div>Hello world!</div>,
  },
]);

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
        <RouterProvider router={router} />
      </div>
      <ToastContainer position="bottom-right" theme="dark" hideProgressBar/>
    </div>
  );
}

export default App;
