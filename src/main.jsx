import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Circles from './components/UI/Circles'
import NotesProvider from './context/NotesContext'

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <Circles />
      <div className="max-w-screen-xl min-h-screen px-2 mx-auto">
        <App />
      </div>
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
