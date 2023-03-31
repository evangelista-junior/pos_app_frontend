import { useState, useContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthContext } from './contexts/Auth/AuthContext'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { MainPage } from './pages/mainPage'

function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.signout();
    navigate('/')     
  }

  return (
    <div className="App">
      
      {/* {auth.user && <button onClick={handleLogout}>Logout</button> } */}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route 
          path='/command/make-order/:idOrder' 
          element={<RequireAuth><MainPage /></RequireAuth>}
        />
      </Routes>
      
    </div>
  )
}

export default App
