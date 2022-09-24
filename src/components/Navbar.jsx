import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-space-between">
          <Container><Link to="/" className="text-white ms-3 text-decoration-none">
          🏠Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          📒Contacto
          </Link></Container>
          <Container className="p-4"></Container>
          <Container className="justify-content-end"><Navbar.Brand>Happy Cake 🍰</Navbar.Brand></Container>
        
          
          
        </Container>
      </Navbar>
    </>
  );
}
