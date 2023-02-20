import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Lheader() {
  return (
    <Navbar  bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Library Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/libhome">Home</Nav.Link>
            <Nav.Link href="books">All Books</Nav.Link>
            <Nav.Link href="addbook">Add Book</Nav.Link>
            <Nav.Link href="adduser">Register User</Nav.Link>
            <Nav.Link href="alluser">All Users</Nav.Link>

            {/* <Nav.Link href="/issuedbooks">Issued Books</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Lheader;