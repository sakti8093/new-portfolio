import React from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import { Button } from 'antd'

const NavBar:React.FC = () => {
  return (
    <div className='nav' >
       <div className='nav-left' >
        <img src={logo} />
            <h2 className='text-hue'>akti</h2>
       </div>
        <div className='nav-childs' >
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <Button type='dashed' >Resume</Button>
        </div>
    </div>
  )
}

export default NavBar