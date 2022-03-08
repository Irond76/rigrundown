import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='container-fluid'>
        <div className='row '>
            <div className='col d-flex justify-content-center mt-3'>
                <h1 className='main-header text-center mb-5'>The Rig Rundown</h1>
            </div>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                <h2 className='sub-header'>With: Dale Bendixen</h2>    
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Header