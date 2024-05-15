import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './routes'

import { RouterProvider} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);