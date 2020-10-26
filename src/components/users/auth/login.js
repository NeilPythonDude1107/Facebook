import React, {useState} from 'react'
import '../../styles/login.css'
import {Link, useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth} from '../../config/firebase'



const Login = () => {
  const history = useHistory('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (event) => {
      event.preventDefault()

      auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        toast.success('Logged In Successfully!')
        history.push("/");
      })
      .catch((e) => {
        if (
          e.message ===
          "The password is invalid or the user does not have a password."
        ) {
          toast.error("Incorrect Credentials! Please check your email/password!");
        } else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
            toast.error("Incorrect Credentials! Please check your email/password!");
        } else {
          toast.error(e.message);
        }
      });
  }
  return(
    <div className='login'>
        <ToastContainer/>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" class="login__logo" />
        <div className='login__container'>
            <h3>Login To Facebook</h3>
            <form>
                <center>
                    <input type='email' placeholder='Email...' onChange={(e) => setEmail(e.target.value)}/>
                </center>
                <center>
                    <input type='password' placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
                </center>
                <center>
                    <button type='submit' className='login__login' onClick={login}>Login</button>
                </center>
                <center>
                    <div className='sideinfo'>
                        <h5>Forgot Password ?</h5>
                        <h5 className='dot'>.</h5>
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                          <h5 class="rtd">Sign up for Facebook</h5>
                        </Link>
                    </div>
                </center>
            </form>
        </div>
    </div>
  )
}

export default Login