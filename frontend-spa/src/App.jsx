import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <br />
      <div className="d-grid gap-2 col-4 mx-auto">
        <br />
        <a
          className="w-100 btn btn-lg btn-primary"
          href="http://localhost:3000/oauth2/authorization/keycloak"
          role="link"
          style={{ marginTop: '10px' }}
        >
          Login
        </a>
      </div>
    </div>
  )
}

export default App
