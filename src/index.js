import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import '@fortawesome/fontawesome-free/css/all.min.css';




const firebaseConfig = {
  apiKey: "AIzaSyB4OOUIJlQrznpq_3zvTozD6mjnqfIatdE",
  authDomain: "blog-react-de244.firebaseapp.com",
  projectId: "blog-react-de244",
  storageBucket: "blog-react-de244.appspot.com",
  messagingSenderId: "697035342074",
  appId: "1:697035342074:web:35f24b3799edbe6b0e4943",
  measurementId: "G-3QYG0NZYYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  
</React.StrictMode>
);

