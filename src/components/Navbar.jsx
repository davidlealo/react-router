import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand>Dogstel</Navbar.Brand>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <Link to="/planes" className="text-white ms-3 text-decoration-none">
            Planes
          </Link>
          <Link to="/registro" className="text-white ms-3 text-decoration-none">
            Registro
          </Link>
          <Link to="/login" className="text-white ms-3 text-decoration-none">
            Login
          </Link>

        </Container>
      </Navbar>
    </>
  );
}
