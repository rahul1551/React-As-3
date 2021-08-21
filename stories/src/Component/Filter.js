import React from 'react';
import '../index.css';

const Filter = () => {
    return ( 
        <main>
        <div className="main-div">
            
            <h3 className="trending-post">Trending Posts</h3>

            <div className="category-wrap">
                <i className="fas fa-filter"></i> <span className="filter-text">Filter by Category</span>
            </div>

            <div className="category-item-wrap">
                <div className="category-item active-category">All</div>
                <div className="category-item">Artificial Inteligence</div>
                <div className="category-item">Cloud Computing</div>
                <div className="category-item">Devops</div>
                <div className="category-item">Programming Languages</div>
                <div className="category-item">Mobile Application Development</div>
                <div className="category-item">Technology and Tools</div>
                <div className="category-item">Get a Job in Tech Company</div>
                <div className="category-item">Others</div>
            </div>
            </div>
            </main>
     );
}
 
export default Filter;