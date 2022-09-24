import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
  return (
    <Form className="m-5">
        <h1>Cuéntanos en qué te podemos ayudar</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Escríbe tu correo y a continuación lo que nos quieres contar.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" placeholder="Descripción" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Contáctame por teléfono" />
        <Form.Check type="checkbox" label="Contáctame por correo" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Contacto;