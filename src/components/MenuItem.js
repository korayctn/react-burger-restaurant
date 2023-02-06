import React from 'react'
import css from '../'
function MenuItem({name,image,content,price}) {
    console.log(image)
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1 style={{ marginBottom: '10px' }}>{name}</h1>
            <h6 style={{ marginTop: '0px' }}>{content}</h6>
            <p>
            <i style={{ color: 'red' }}>{price} TL</i>
            </p>
      </div>
  )
}

export default MenuItem