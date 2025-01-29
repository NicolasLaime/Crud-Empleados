import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Header from "./pages/header/Header"
import PaginaError from "./pages/404/PaginaError"
import CrearEmpleado from "./pages/empleado/CrearEmpleado"
import ActualizarEmpleado from "./pages/empleado/ActualizarEmpleado"

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/crearempleado" element={<CrearEmpleado/>}/>
      <Route path="/actualizarempleado/:empleadoId" element={<ActualizarEmpleado/>}/>
      <Route path="*" element={<PaginaError/>}/>

    </Routes>
    </>
    

  )
}

export default App