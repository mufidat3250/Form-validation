import React from 'react'
import './button.scss'

const Button = ({title , handleClick}:{title:string, handleClick:()=>void}) => {
  return (
    <button className='button' onClick= {handleClick}>{title}</button>
  )
}

export default Button