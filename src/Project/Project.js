import React from "react";
import "./Project.css"
const ProjectItem = (props) => {
    const { Name, Expl, Tools, Link } = props;

    return (
        <div>
            
            <h4><b>{Name}</b></h4>
            <p>{Expl}</p>
            <div className="Experience">
               
                <div>
                    {/* <div className="Round-icon"></div> */}
                    <div className="Round-icon"></div>
                    <div className="Round-icon"></div>
                </div>
                <div>
                    {/* <div className="Text-size1">{Expl}<div> */}
                    <div className="Text-size">Tools:{Tools}</div>
                    <div className="Text-size">Link:<a href={Link}>{Link}</a></div>


                </div>

                <br></br>
            </div>
            <br></br>



        </div>
           
        

    );
};
export default ProjectItem;