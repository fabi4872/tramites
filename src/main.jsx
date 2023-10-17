import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../../tramites/src/styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './modules';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
