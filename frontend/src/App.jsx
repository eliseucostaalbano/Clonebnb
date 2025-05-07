import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/login";
import Registro from "./Pages/registro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Conta from "./Pages/Conta";
import { UserContextProvider } from "./contexts/UserContext";


// fazer um  npm run dev tanto no frontend quanto no backend
// login:eliseucosta@gmail.com senha:teste

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider >
       <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro  />} />
        <Route path="conta/:subpage?" element={<Conta />} />
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
