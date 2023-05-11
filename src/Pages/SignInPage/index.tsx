import React, {useState} from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import Button from '../../atom/Button'
import './SignIn.scss'
import Input from '../../atom/Input'

const database = [{
    email:'wahabmufidat1919@gmail.com',
    password:'iyanuoluwa'
}, {
    email:'mufidat2@gmail.com',
    password:'iyanuoluwa'
}]
const errorMessage ={
    email:'Invalid Email',
    password:'Incorrect Password'
}

const SignIn = () => {

    const [error, setError] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    console.log(error)
    const renderErrorMessage = (name)=> name=== errorMessage.name &&  (<div>{errorMessage.message}</div>)
    const handleSubmit = (event)=>{
        event.preventDefault();
        setTimeout(() => {
            setError({message:null})
        }, 2000);
        const userData = database.find((user)=> user.email=== email)
       if(userData){            
        if(userData.password !== password) {
            console.log('invalid password')
            setError({message:errorMessage.password})
        }else setIsSubmitted(true)

       }else {
        setError({...error , message:errorMessage.email})
        console.log('invalid message')
       }
    }
    
  return (
    <AuthLayout>
        <div className='signInWrapper'>
            <header>
            <h1>Welcome Back</h1>
                    <p>Sign in to your account and continue your journey towards improved productivity.</p>
            </header> 
        <div className ='input-wrapper'>
        <Input title='Email' placeholder='youremail@gmail.com' name='email' value={email} handleChange={(e)=>setEmail(e.target.value)}/>
        <Input title='Passward' placeholder='*****'  icon name='password' value={password} handleChange={(e)=>setPassword(e.target.value)}/>
        <span className='error'>{error.message}</span>
        </div>
            <Button title='SignIn' handleClick={handleSubmit}/>
        </div>
    </AuthLayout>
  )
}

export default SignIn