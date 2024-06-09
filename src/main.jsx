import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigasi from './comp/navigasi.jsx'
import Menu from "./comp/btnMenu.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	

		<App />
	
	<Menu />
	
  </React.StrictMode>,
)
