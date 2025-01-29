import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CrearEmpleado = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    departamento: ""
  });

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Datos del formulario:", formData);
    try {
      const response = await fetch(`${API_URL}/crearempleado`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log("Empleado creado:", data);
      navigate("/");
    } catch (error) {
      console.log("Error al crear un nuevo empleado", error.message);
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="bg-white p-4 rounded shadow">
            <h1 className="text-center mb-4">Crea un nuevo Empleado</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="FormBasicName" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  placeholder="Ingresa el Nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="FormBasicApellido" className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  placeholder="Ingresa el Apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="FormBasicEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingresa el Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="FormBasicTelefono" className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  placeholder="Ingresa el Teléfono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="FormBasicDepartamento" className="mb-3">
                <Form.Label>Departamento</Form.Label>
                <Form.Control
                  type="text"
                  name="departamento"
                  placeholder="Ingresa el Departamento"
                  value={formData.departamento}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Agregar nuevo empleado
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CrearEmpleado;
