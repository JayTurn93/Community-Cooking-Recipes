import { useState } from 'react'
import './App.css'
import Create from './components/Create'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import Login from './components/Login'
import Explore from "./components/Explore"
import Signup from './components/Signup'

function App() {
  const [user, setUser] = useState("")

  return (
    <>
      <Create />
      <Explore />
      <Home />
      <Login user={user} setUser={setUser}/>
      <UserProfile user={user} />
      <Signup user={user} setUser={setUser} />
    </>
  )
}

export default App
