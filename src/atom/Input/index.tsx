import React from 'react'
import './Input.scss'

const Input = ({title, placeholder, icon , name, value, handleChange}:{title:string, placeholder:string, icon, name:string , value:string ,handleChange:any}) => {
  return (
    <div className='inputWrapper'>
     <p>{title}</p>
    <div className='input-container'>
    <input type='text' placeholder={placeholder} className='input' name={name} onChange = {handleChange} value = {value}/>
{icon && <img src='/vectors/eye.png'/>}
    </div>
    </div>
  )
}

export default Input

