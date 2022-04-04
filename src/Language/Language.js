import React from "react";
import "./Language.css"
const Item = (props) => {
    const { language } = props;

    return (
        <div>


            <div className="Experience">
                
                    <div className="Round-icon"></div>
                   
                
                
                    <div className="Text-sizes">{language}</div>
            
            </div>


        </div>
            
            
       

    );
};
export default Item;






