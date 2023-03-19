import React, { useState } from 'react'
import Navbar from './Navbar'
import Menu from './menuApi'
import MenuCard from './MenuCard'

const Resturant = () => {
    const uniqueList = [
        ...new Set(
            Menu.map(items => {
                return items.category;
            })
        ),
        "All"
    ]
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)
    const filterItem = (category) => {
        if (category === "All"){
            setMenuData(Menu)
            return
        }
        const updated_list = Menu.filter((items) => {
            return items.category === category
        })
        setMenuData(updated_list)
    }
    return (
        <div>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </div>
    )
}

export default Resturant