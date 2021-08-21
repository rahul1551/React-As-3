import React from 'react';
import '../index.css';


const Cards = (props) => {

    const {
        title,
        description,
        small_image,
        posted_on,
        authorname } = props;


    return (

            
                <div className="course-card">
                    <img className="card-image" src= {small_image} alt="lamp" />

                    <div className="course-card-content">
                        <h2 className="card-title">{title.slice(0,40)}...</h2>
                                              
                        <p className="card-author">{authorname}<span className="card-date"> | { posted_on.split("T")[0]}</span></p>

                        <p className="card-content">{description.slice(0,100)}...</p>
                    </div>
                </div>
                



    );
}

export default Cards;