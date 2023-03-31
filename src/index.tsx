import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";

const app = (
    <Provider store={store}>
        <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
        />
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
)
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(app)