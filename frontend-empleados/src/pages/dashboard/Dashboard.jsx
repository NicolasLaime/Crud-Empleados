import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {


    const API_URL = import.meta.env.VITE_API_URL;

  
    const [empleados, setEmpleados] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
          const fetchEmpleados = async() => {
            try {
                const response = await fetch(`${API_URL}/empleados`)
                const data = await response.json();

                setEmpleados(data);
            } catch (error) {
                console.log("Error al pedir empleados a la base de datos", error.message)
            }
          }

          fetchEmpleados();
    }, [API_URL])


    const handleActualizar = (empleadoId) => {
      navigate(`/actualizarempleado/${empleadoId}`);
    }


   //Borrar empleado

   const handleDelete = async(empleadoId) => {
      try {
        const response = await fetch(`${API_URL}/empleados/${empleadoId}`,{
                      method: "DELETE",

        });
        if(response.ok){
            setEmpleados((prevEmpleado) => prevEmpleado.filter((empleados) => empleados.id !== empleadoId))
        }

        
        console.log(`Empleado con el ID ${empleadoId} borrado exitosamente `);
      } catch (error) {
        console.log('====================================');
        console.log("Error al eliminar el empleado", error.message);
        console.log('====================================');
      }
   }




  return (

    <>
        <Container>
             <Row>
                <Col>
                   <h1 className="text-center"> Empleados Registrados </h1>
                   <Table striped bordered hover responsive>
                         <thead>
                            <tr>
                                <th>nombre</th>
                                <th>email</th>
                                <th>telefono</th>
                                <th>departamento</th>
                                <th>¿Que hacer?</th>

                            </tr>
                         </thead>
                         <tbody>
                            {empleados.map((empleado) => (
                                <tr key={empleado.id}>
                                      <td>{empleado.nombre}</td>
                                      <td>{empleado.email}</td>
                                      <td>{empleado.telefono}</td>
                                      <td>{empleado.departamento}</td>
                                      <td>
                                        <Button variant="outline-secondary"  onClick={() => handleActualizar(empleado.id)}>Actualizar</Button>{" "}
                                        <Button onClick={() => handleDelete(empleado.id)} variant="outline-danger">Borrar</Button>
                                      </td>
                                </tr>
                            ))}
                         </tbody>
                   </Table>
                </Col>
             </Row>

        </Container>
    </>    



  )
}

export default Dashboard
