import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../Css/Login.css"


const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  // loginsubmit
  const login = async (e) => {
    e.preventDefault()
    // firebase login call 
    try {

      const userData = await signInWithEmailAndPassword(getAuth(), email, password)
      toast.success(`${email} Logged in successfully`,{ autoClose: 2000 });



      setTimeout(() => {
        navigate('/articleListpage');
      }, 2000);

    
     
      console.log("userdata", userData)
    
    } catch (e) {
      toast.error(`Login failed: ${e.message}`);
      setError(e.message)
    }
  }

  return (
<body className='body' >
    <Container className="d-flex justify-content-center align-items-center  vh-100 border-2px "   >
      <div className="login-form w-100 border border-dark rounded p-4 " style={{ maxWidth: '450px', }}>
        <h1 className="mb-4 text-center">Login</h1>
        <img className="img-fluid" src="https://img.freepik.com/premium-photo/laptop-cup-coffee-yellow-table_244157-4336.jpg" style={{width:"300px"}}   alt="" />
        {error && <p className='error'>{error}</p>}
        <Form >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>UserEmail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your UserEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100" onClick={login}>
            Login
          </Button>
        </Form>
        <div className="text-center mt-3">
          <span>Forgot Password?</span>
          <p className='mt-3 text-center'>
            Don't have an Account? <Link className='text-decoration-none' to="/register">Register</Link>
          </p>
        </div>

      </div>
      <ToastContainer
       
      />

    </Container>
    </body>
  )
}

export default LoginPage;