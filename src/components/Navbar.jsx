import React from 'react'
import './style.css'
const Navbar = ({filterItem, menuList}) => {
    return (
        <nav>
            <div className="container">
                    <ul className='nav-links'>
                        {menuList.map((items)=>{
                             return(
                                <li><a  onClick={()=> filterItem(items)}>{items}</a></li>
                             )
                        })}
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar