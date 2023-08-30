

import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from './components/MiApi'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {

  return (
 <>
    <h1>Rick and Morty Api</h1>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Principal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Elemento 1</Nav.Link>
            <Nav.Link href="#link">Elemento 2</Nav.Link>
            <NavDropdown title="Otras opciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Opción 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Opción 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Acerca de
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <MiApi />
    <footer className="text-center p-3">
        Landing Page de prueba
    </footer>
    </>
  )}

  export default App