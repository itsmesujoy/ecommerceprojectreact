import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../img/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.webp"
function Header() {
    return (
    <div className='centre'>
        
            <div className="navbar navbar-expand-lg navbar-light  text-white  ">
         
                <div className='ng'>
                    
                <div className="collapse navbar-collapse text-white" id="navbarNav">
                    <ul className="navbar-nav text-white centre ">
                        <li className="nav-item active text-white ">
                            <button className='bg-dark ss ml-4'>  <Link to={"/categories"}
                                className="nav-link text-white" href="#"> Add Categories <span className="sr-only">(current)</span></Link></button>
                  </li>
                  <li className="nav-item ">
                            <button className='bg-dark ss ml-4'>  <Link to={"/products"} className="nav-link text-white" href="#">Add products</Link></button>
                  </li>
                        <li className="nav-item">
                            <button className='bg-dark ss ml-4'>    <Link to={"/orders"} className="nav-link text-white" href="#">My Orders</Link></button>
                        </li>
                        <li>
                               <button className='bg-dark ss ml-4'>  <Link to={"/cupons"} className="navbar-brand textcentre  text-white" href="#">Coupons</Link></button>
                        </li>
                            <li>
                                <button className='bg-dark ss ml-4'>  <Link to={"/about"} className="navbar-brand textcentre  text-white" href="#">About</Link></button>
                            </li>
              </ul>
          </div>
                </div></div> 
      </div>
  )
}

export default Header