import './Navbar.css'
import logo from '../../assets/logo.png'
import bell_icon from '../../assets/bell_icon.svg'
import search_icon from '../../assets/search_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useEffect, useRef, useState } from 'react'
import { logout } from '../../firebase'


function Navbar() {
    const navRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=80){
                navRef.current.classList.add('dark-nav')
            }else{
                navRef.current.classList.remove('dark-nav')
            }
        })
    },[])

    return(
        <div className="navbar" ref={navRef}>
            <div className="left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className="right">
                <img src={search_icon} alt="" className='icons'/>
                <img src={bell_icon} alt="" className='icons'/>
                <div className="navbar-profile">
                    <img src={profile_img} alt="" className='profile'/>
                    <img src={caret_icon} alt="" />
                    <div className="dropdown">
                        <p onClick={()=>{logout()}}>Sign out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
