import React from 'react'
import "./style.css"

const MenuCard = ({ menuData }) => {
    console.log(menuData)
    return (
        <div className="container">
            <div className="flexItems">
                {menuData.map((items, index) => {
                    return (
                        <>
                            <div className="card" key={items.id}>
                                <div className="name">{items.name}</div>
                                <div className="category">{items.category}</div>
                                <div className="price">{items.price}</div>
                                <div className="description">{items.description}</div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default MenuCard