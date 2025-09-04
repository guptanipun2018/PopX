import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.css'
import Input from '../../common/Input';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile', { state: { userName: "Nipun", userEmail: email } });
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}> Signin to your PopX account </h2>
        <h5 className={styles.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h5>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Email Address" type="email" placeholder="Enter email address" onChange={(e)=> setEmail(e.target.value)} value={email}/>
        <Input label="Password" type="password" placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  )
}

export default SignIn