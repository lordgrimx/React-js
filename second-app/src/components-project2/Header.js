import React from 'react'
import profile from './vesikalik.jpg';

function Header() {
  return (
    <div className='header--box'>
      <img 
      src={profile}
      alt='Logo'
      className='header--profile'
      />
    </div>
  )
}

export default Header;