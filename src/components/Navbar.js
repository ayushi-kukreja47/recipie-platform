import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar';
import {Link,useLocation} from 'react-router-dom';
import {faHome,faList,faCog} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const location=useLocation()
    const [showSidebar,setShowSidebar] = useState(false);
    const links= [
        {
            name:"Home",
            path:"/",
            icon:faHome
        },
        {
            name:"Recipies",
            path:"/recipies",
            icon:faList
        },
        {
            name:"Settings",
            path:"/settings",
            icon:faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false);
    }
  return (
    <>
        <div className='navbar container'>
            <Link to="/" className='logo'>F<span>oo</span>diesHub</Link>
            <div className='nav-links'>
                {links.map(link =>(
                    <Link className={location.pathname === link.path ? "sidebar-link active": "sidebar-link"} to={link.path} key={link.name}>{link.name}</Link>
                ))}
                
            </div>
            <div onClick={()=>setShowSidebar(true)} className={showSidebar ? "sidebar-btn active ":"sidebar-btn"}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links}/>}
    </>
  )
}

export default Navbar