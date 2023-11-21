import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import './styles/allstyles.css'
import IndexApp from './components/IndexApp.jsx'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
