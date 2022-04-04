import React from "react";
import "./Education.css"
const Item = (props) => {
    const { Course,Institution,Place,CGPA } = props;

    return (
        <p>
            <p className="year">{Course}</p>
            <p className="Institution">{Institution},{Place}</p>
           
            <p className="Grade"> {CGPA}</p>
            
            
            </p>


        
            
            
       

    );
};
export default Item;






