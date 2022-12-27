import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex flex-col justify-evenly'>
       <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand mx-3">Valuepitch</a>

  <form className="form-inline">
  <div className='flex flex-col'></div>
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</div>
    </>
    
       
  )
}

export default Navbar
