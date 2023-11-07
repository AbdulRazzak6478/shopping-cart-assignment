import React, { useState } from 'react';
import './Navbar.css';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const [showNavList,setShowNavList] = useState(false);
    const {cartItems }=useSelector((state)=>state.cart);
    function toggleNavList(){
        console.log('click');
        setShowNavList(!showNavList);
    }
  return (
    <>
        <nav className='nav'>
            <ul className='nav-list' style={{ display: showNavList ? "flex" : null }}>
                <Link to={"/"}>
                <li className='nav-list-item'>
                    <a href="#" className='link nav-link'>Home</a>
                </li>
                </Link>
                <Link to={"/about"}>
                <li className='nav-list-item'>
                    <a href="#" className='link nav-link'>About</a>
                </li>
                </Link>
                <Link to={"/contact"}>
                <li className='nav-list-item'>
                    <a href="#" className='link nav-link'>Contact</a>
                </li>
                </Link>
                <Link to={"/blog"}>
                <li className='nav-list-item'>
                    <a href="#" className='link nav-link'>Blog</a>
                </li>
                </Link>
                <Link to={'/cart'}>
                    <li className='nav-list-item cart'>
                        <button className='shopping-cart-icon'><FaShoppingCart /></button>
                        <span>{cartItems.length}</span>
                    </li>
                </Link>
                <Link to={'/signup'}>
                    <li className='nav-list-item'>
                            <button className='btn'>SignUp</button>
                    </li>
                </Link>
                <Link to={'/login'}>
                    <li className='nav-list-item'>
                            <button className='btn'>LogIn </button>
                    </li>
                </Link>
            </ul>
            <button
                type="button"
                onClick={toggleNavList}
                className="menu btn--icon nav__hamburger"
                aria-label="toggle navigation"
            >
                { showNavList ? <CgClose /> : <FiMenu />}
            </button>
        </nav>
    </>
  )
}

export default Navbar