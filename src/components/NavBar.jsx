import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
// import {CgMenuOreos} from 'react-icons/fa'
import "./styles/NavBar.css"

function NavBar(background) {
//  const logo= "http://placekitten.com/g/200/300"
  return (
    <>
    <header className="header_background">
    <div className="header-container">

    </div>

{/* ------------boton de menu ---------------*/}
    {/* <div className='menu-button'>
        {/* <CgMenuOreos/> */}
   
    {/* <small>Menu</small>

    </div> */} 

    {/* /* ------------links de navegacion------------ */}
    <nav className='nav_header'>
        <ul className="nav_container">
            <li className="nav_container_list">
                {/* <Link className="nav_container_list_link" to={"/"}>Inicio</Link> */}
            </li>
            <li className="nav_container_list">
                {/* <Link  className="nav_container_list_link" to={"/ProductosGrid"}> Productos <span className='arrow'></span></Link> */}
            </li>
            <li className="nav_container_list">
                {/* <Link  className="nav_container_list_link" to={"/SobreMI"} >Sobre Mi< Link/> */}
            </li>
            <li className="nav_container_list">
                {/* <Link className="nav_container_list_link" to={"/"Contacto}>Contacto</Link> */}
            </li>
        </ul>
    </nav>
    

    {/* ----------------cart-widget--------------     */}

    <div>
        <CartWidget/>
    </div>


    {/* logo de la marca */}

    {/* <div className='logo-container'>
        <img  className='img-container' src={logo} alt="logo" />

    </div> */}


    </header>

    




    </>

   

  )
}



export default NavBar