import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const [menuItems, setMenuItems] = useState(items);
	
	const allCategories = new Set(items.map((item)=>item.category));
	const [categories, setCategories] = useState(["todo", ...allCategories]);
	
	const [activeCategory, setActiveCategory] = useState("todo");
	
	const filterCategory=(category)=>{
		if(category==="todo"){
			setMenuItems(items);
			setActiveCategory("todo");
		} else {
			setMenuItems( items.filter((item)=> item.category === category) );
			setActiveCategory(category);
		}
	}
	
  return <main>
	  <section className="section">
		  <div className="title">
			  <h2>Parrilla "LOS GORDOS"</h2>
			  <h3>Nuestro Menu</h3>
			  <div className="underline"></div>
		  </div>
		  <Categories 
			  categories={categories} 
			  filterCategory={filterCategory} 
			  activeCategory={activeCategory}/>
		  <Menu items={menuItems} />
	  </section>
  </main>
}

export default App;
