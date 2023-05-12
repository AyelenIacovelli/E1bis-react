import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/GlobalStyles';
import ToDoListState from './components/context/ToDoListState';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Casa</h1>
  },
  {
    path: "/Home",
    element: <h1>Home</h1>
  },
  {
    path: "/Pokemonapi",
    element: <h1>Pokemonapi</h1>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />

    <ToDoListState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToDoListState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
