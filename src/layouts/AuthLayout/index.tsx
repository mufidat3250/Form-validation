import React from 'react'
import './AuthLayout.scss'

const AuthLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='AuthWrapper'>
        <div className='leftSide'>jjj</div>
        <div className='content'>{children}</div>
    </div>
  )
}

export default AuthLayout