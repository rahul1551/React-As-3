import React from 'react';
import '../index.css';


const Topbar = () => {
    return (
        <header>
            <div className="topbar-left">
                <div className="header-div">
                    <div id="header-logo">EDYODA</div>
                    <p id="header-sub-heading"> Stories</p>
                </div>


                <div className="explore-div">
                    <p className="explore-text">Explore Categories <span>
                        <i class="fas fa-chevron-down"></i>
                    </span></p>

                </div>
            </div>

            <div className="topbar-div">
                <div>
                    <p className="topbar-text">EdYoda is free learning and knowledge <br />
                        sharing platform for techies
                    </p>
                </div>

                <div>
                    <button className="topbar-btn">Go To Main Website</button>
                </div>


            </div>

        </header>
    );
}

export default Topbar;