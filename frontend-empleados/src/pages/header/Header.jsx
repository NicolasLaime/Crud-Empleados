import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <>
       <Navbar bg='primary' variant="dark">
       <Container>
         <NavbarBrand>Sistema Crud de empleados</NavbarBrand>
         <Nav className='ml-auto'>
          <Nav.Link as={Link} to="/" className="nav-link">
              Empleados
          </Nav.Link>
          <Nav.Link as={Link} to="/crearempleado" className="nav-link">
              Crear Empleado 
          </Nav.Link>
         </Nav>
       </Container>

       </Navbar>
       
    </>
  )
}

export default Header
