import { Button, Container, Nav, Navbar as BootstrapNavbar, Form } from "react-bootstrap";
import { Link,useLocation  } from "react-router-dom";
import './NavBar.css'; 
import useUser from "./useUser/Useuser";
import { getAuth,signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const {user}= useUser()
  const navigate = useNavigate()
  const location = useLocation();
  const isActive = (path) => location.pathname === path;


  const handleLogOut = () => {
    signOut(getAuth()).then(() => {
      // console.log('Logged out successfully');
      toast.success('Logged out successfully',{ autoClose: 1000 });
      setTimeout(() => {
        navigate('/');
      }, 2000);

     
      
    }).catch((error) => {
      console.error('Error logging out:', error);
    });
  };

  const handleLogIn = () => {
    navigate('/login'); 
  };
  return (
    <BootstrapNavbar expand="lg" className="bg" style={{ height: "85px" }}>
      <Container fluid>
        <BootstrapNavbar.Brand >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJV-XXLvcaIfVpXaXMF_sjmVv_h-yG1tTA9Q&s"
            alt="Logo"
            style={{ height: "60px" }} 
          />
        
        </BootstrapNavbar.Brand>

    
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 d-flex align-items-center">
            <Link to="/"   className={`Link me-4 ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/articleListpage" className={`Link me-4 ${isActive('/articleListpage') ? 'active' : ''}`}>Articles</Link>
            <Link to="/about"className={`Link me-4 ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
           {user && (
           
           <Link to="/addPost" className={`Link me-4 ${isActive('/addPost') ? 'active' : ''}`}>Add Article</Link>
           
          )}
     {user && ( <Link to={`/articles/user/${user ? user.email : ''}`}className={`Link me-4 ${isActive(`/articles/user/${user.email}`) ? 'active' : ''}`}>My Articles</Link>)}
          </Nav>

          <Nav className="ms-auto">
          {
  user ? (
    <Button
      className="btn-dark ms-auto" 
      style={{ border: '2px solid red' }}
      onClick={handleLogOut}
    >
      Log Out <i className="fas fa-home"></i>
    </Button>
  ) : (
    <Button
      className="btn-dark"
      style={{ border: '2px solid red' }}
      onClick={handleLogIn}
    >
      Log In <i className="fa-solid fa-right-to-bracket"></i>
    </Button>
  )
}
          </Nav>
       {  isActive('/articleListpage') &&(
        <Form className="d-flex ms-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>)}
        </BootstrapNavbar.Collapse>
        <ToastContainer />
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
