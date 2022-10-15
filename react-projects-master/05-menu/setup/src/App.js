import React, { useState } from "react"
import Menu from "./Menu"
import Categories from "./Categories"
import items from "./data"

const allCategories = ["all", ...new Set(items.map(item => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = category => {
    if (category === "all") {
      setMenuItems(items)
      return
    }
    const newItems = items.filter(item => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='title'>
        <h2>
          Our Menu
          <div className='underline'></div>
        </h2>
        <Categories
          filterItems={filterItems}
          categories={categories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
