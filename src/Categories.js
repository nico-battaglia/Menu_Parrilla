import React from 'react';

const Categories = ({categories, filterCategory, activeCategory}) => {
	return <div className="btn-container">
		{categories.map((category, index)=>{
			
			return (
				<button 
					key={index} 
					className= {(category===activeCategory)? "filter-btn active-category" : "filter-btn"} 
					onClick={()=>filterCategory(category)}
					>
					{category}
				</button>
			)
		})}
	</div>;
};

export default Categories;
