import React from 'react'


function ImageSection(){
    return(
        <div className="ImageSection">
            <div className="img">
                <img src={"https://cdn.shopify.com/s/files/1/0220/9497/0980/products/Axolotl---Ambystoma-mexicanum_720x.jpg?v=1571152418"} alt=""/>
            </div>
            <div className="about-info">
                <h4> Aye</h4>
                <p className="about-text">
                    Lololololol
                </p>
           
                <div className ="about-details">
                    <div className="left-section">
                        <p>Nami</p>
                        <p>Agi</p>
                        <p>Countri</p>
                    </div>
                    <div className="right-section">
                        <p>Ayi</p>
                        <p>Bagi</p>
                        <p>Pan</p>
                    </div>
                </div>
                <button className="btn-download">Download CV</button>
            </div>
        </div>
    )
}
export default ImageSection;