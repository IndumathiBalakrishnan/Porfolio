import React from "react";
import "./Achievements.css"
const AchieveItem = (props) => {
    const { Achievement } = props;

    return (
        <div>


            <div className="Experience">
                
                    <div className="Round-icon"></div>
                   
                
                
                    <div className="Text-size">{Achievement}</div><br></br>
            
            </div>


        </div>
            
            
       

    );
};
export default AchieveItem;






