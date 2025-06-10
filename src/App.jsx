import { useState } from 'react'
import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Explore from "./components/Explore";
import Signup from './components/Signup';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import ViewRecipe from './components/ViewRecipe';



function App() {
  const [user, setUser] = useState("")

  return (
    <>
      <Header />
      <Routes>
        <Route path="/create" element={<Create user={user} setUser={setUser} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
        <Route path="/profile" element={<UserProfile user={user} />} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/viewrecipe" element={<ViewRecipe />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
