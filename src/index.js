import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  RouterProvider,
} from "react-router-dom";

import {BlogProvider} from "./providers/blog-provider";
import {router} from "./routes";
import {AuthProvider} from "./providers/auth-provider";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
      <AuthProvider>
        <BlogProvider>
          <RouterProvider router={router}/>
        </BlogProvider>
      </AuthProvider>
    // </React.StrictMode>
);
