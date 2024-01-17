import React from 'react'
import './topbar.css'
import ExtensionIcon from '@mui/icons-material/Extension';

const Topbar = () => {
  return (
    <div className='topbar display-row space-between'>
          <div className='left display-row'>
              <div className='icon'>
                  {/* Icon */}
                  <ExtensionIcon />
              </div>
               <div className='home'>
                 <a href="#intro">Home</a>
               </div>
               <div className='about'>
                  <a href="#skills">About</a>
               </div>
               <div className='contacts'>
                  <a href="#contact">Contact</a>
               </div>
          </div>
          <div className='right'>
               bye
          </div>
    </div>
  )
}

export default Topbar