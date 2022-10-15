import React from "react"

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map(menuItems => {
        const { id, title, img, desc, price } = menuItems
        return (
          <article
            className='menu-items'
            key={id}
          >
            <img
              src={img}
              alt={title}
              className='photo'
            />
            <div className='item-info'>
              <header style={{ marginTop: "10px" }}>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
