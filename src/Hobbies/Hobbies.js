import React from "react";
import "./Hobbies.css"
const Item = (props) => {
    const { Hobby } = props;

    return (
        <div>

            
            <div className="Experiences">
               
                    <div className="Round-icon"></div>
        
               
                
                    <div className="Text-sizes">{Hobby}</div>
                    
                    </div>


                </div>
            
         
        

    );
};
export default Item;