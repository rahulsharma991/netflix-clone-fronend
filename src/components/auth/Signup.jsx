import React, { useRef, useState } from 'react'
import Header from '../../layout/Header';
import './Login.css';
import { Link } from 'react-router-dom';
import {formValidation} from'../../utils/formValidation';
const Signup = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    function handleSignUp() {
        const message = formValidation('signup',email.current.value, password.current.value, name.current.value)
          setErrorMessage(message);
        }

  return (
    <div className="relative login-main-container">
    <Header />
    <div className='login-bg-img-container'>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs" 
          alt="netflix background login" className='login-bg-img'/>
    </div>
    <div className='login-form-container'>
      <p className="sign-in-text">Sign Up</p>
    <form className='login-form' onSubmit={(e) =>  e.preventDefault()}>
      <input type="text" placeholder="Full Name" className="login-input" ref={name}/>
      <input type="email" placeholder="Email Address" className="login-input" ref={email}/>
      <input type="password" placeholder="Password" className="login-input" ref={password}/>
      <button className="login-button" onClick={handleSignUp}>Sign up</button>
    </form>
    <p className="text-red-500 mt-2">{errorMessage}</p>
    <p className="account-setup">Already have an account?<span className="account-setup-action"><Link to="/">Sign in</Link></span></p>
    </div>
  </div>
  )
}

export default Signup
