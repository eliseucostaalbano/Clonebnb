import Header from "./components/Header"
import Home from "./Pages/Home"
import Login from "./Pages/login"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
// fazer um  npm run dev tanto no frontend quanto no backend

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL

function App() {
const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Header user ={user}/>

    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login setUser = {setUser}/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
