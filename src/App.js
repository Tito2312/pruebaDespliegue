import { Home } from "./Components/Pages/Home/Home";
import {Register} from "./Components/Pages/Register/Register"
import { Route, Routes } from 'react-router-dom'
import { Postulados } from "./Components/Pages/Postulados/Postulados";  
import { Login } from './Components/Pages/Login/Login'
import { Postulation } from "./Components/Layouts/Postulation/Postulation";
import { Profile } from "./Components/Pages/Profile/Profile"
import { Chat } from "./Components/Pages/Chat/Chat";
import { useAuth } from "./hooks"
import { Reports } from "./Components/Pages/Admin/Reports/Reports"
import { Users } from "./Components/Pages/Admin/Users/Users";
import { ProfilePostulates } from "./Components/Layouts/ProfilePostulates/ProfilePostulates";

function App() {
  const { user } = useAuth()

  return (
    <div>
      <Routes>
      {!user ? (
        <>
          <Route path="/*" element={<Home/>}></Route>
          <Route path= {"/auth/register"} element={<Register/>}></Route>
          <Route path= {"/auth/login"} element={<Login/>}></Route>
        </>
      ) : (
      <>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/notificaciones" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path={"/trabajo/postulados/:path"} element={<Postulados/>}></Route>
        <Route path="/postulaciones" element={<Postulation/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/historialTrabajos" element={<Home/>}></Route>
        <Route path="/favoritos" element={<Home/>}></Route>
        <Route path="/reportes" element={<Reports/>}></Route>
        <Route path="/administrarUsuarios" element={<Users/>}></Route>
        <Route path="/administrarTrabajos" element={<Home/>}></Route>
        <Route path="/user/:path" element={<ProfilePostulates/>}></Route>
      </>)}
      </Routes>
    </div>
  );
}

export default App;
