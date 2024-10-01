import { useState } from 'react';
import {Button, Container, Form} from 'react-bootstrap'
import { Link,useNavigate } from "react-router-dom";
import{getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import "../Css/Register.css"
import { ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterPage = () =>{
    const[email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[confirmPassword,setConfirmPassword] = useState("")
    const[error,setError] = useState("")
    const navigate = useNavigate()

// siginIn
const signIn = async (e)=>{
    e.preventDefault()
try{
if(password!==confirmPassword){
  toast.error("Passwords do not match")

setError("password does not match")
return
}

await createUserWithEmailAndPassword(getAuth(),email,password)
//     toast.success("User ed successfully")
// navigate('/articleListpage')

toast.success(`${email} User registered successfully`,{ autoClose: 2000 });



setTimeout(() => {
  navigate('/articleListpage');
}, 2000);

}catch(e){
  toast.error(e.message)
    setError(e.message)
}

}


    return(
     <body className='body'>
        <Container className="d-flex justify-content-center align-items-center vh-100 border-2px">
      <div className="login-form w-100 border border-dark rounded p-4" style={{ maxWidth: '450px' }}>
        <h1 className="mb-4 text-center">SigIn</h1>
        <img className="img-fluid" src="https://c0.wallpaperflare.com/preview/402/118/398/laptop-wood-display-aerial.jpg" style={{width:"250px"}}   alt="" />
        { error && <p className='error'>{error}</p>}
        <Form >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>UserEmail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your UserEmail"
             value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              
            />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100" onClick={signIn}>
        Create Account
          </Button>
        </Form>
        <div className="text-center mt-3">
          <span>Forgot Password?</span>
          <p className='mt-3 text-center'>
          Already have an Account? <Link className='text-decoration-none' to="/login">Login</Link>
        </p>
        </div>
      </div>
      <ToastContainer
       
       />
    </Container>
    </body>
    )
}

export default RegisterPage