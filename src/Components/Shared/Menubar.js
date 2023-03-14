import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menubar(props) {
  // console.log(props.count);
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="text-success font-weight-bold">
            <h4>Fake-Store</h4>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features" className="mx-2">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing">
              Cart <sup className="fw-bold">{props.count}</sup>
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-2">
              Log in
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menubar;
