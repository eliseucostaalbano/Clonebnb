import Header from "./components/Header"
import Home from "./Pages/Home"
import Login from "./Pages/login"
import Registro from "./Pages/registro"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Conta from "./Pages/Conta"
// fazer um  npm run dev tanto no frontend quanto no backend

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL

axios.defaults.withCredentials = true;

function App() {

const [user, setUser] = useState(null);
 useEffect(() => {
  const axiosGet = async () => {
   const {data} = await axios.get("/users/profile");
   
   setUser(data);
  }
  axiosGet();

 }, []);

  return (
    <BrowserRouter>
      <Header user ={user}/>

    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login user ={user} setUser = {setUser}/>} />
        <Route path="/registro" element={<Registro setUser = {setUser}/>} />
        <Route path ="conta/:subpage?"element={<Conta/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
