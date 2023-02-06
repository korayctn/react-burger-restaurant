import MenuItem from './MenuItem'
import React from 'react'
import Data from '../helpers/Data'
import css from '../styles/Menu.css'
function Menu() {
  console.log(Data)
  return (
    <div className='menu'>
      <h1 className='menuTitle'>
          Our burgers
      </h1>
      <div className='menuList'>
      {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Menu