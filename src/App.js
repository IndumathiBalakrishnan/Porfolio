import React from "react";
import "./App.css";
import Project from "./Project/Project";
import Achievements from "./Achievements/Achievements";
import Hobbies from "./Hobbies/Hobbies";
import Education from "./Education/Education";
import Language from "./Language/Language";
import 'antd/dist/antd.css';
import { PhoneOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';
import { EnvironmentOutlined } from '@ant-design/icons';

import Photo from "./Photo.png";



function App() {
  const EducationList=[
{Course:"2017-2021(B.E-Electronics and Communication Engineering)",Institute:"Kongunadu College of Engineering and Technology",Place:"Thottiyam.",CGPA:"CGPA:8.6"},
{Course:"2015-2017(HSC-BIO-MATHS)",Institute:"Sowdambikaa Matric Hr Sec School",Place:"Thathiengarpet.",CGPA:"Percentage:95%"},
{Course:"(2014-2015(SSLC)",Institute:"Shivani Matric Hr Sec School",Place:"Thathiengarpet.",CGPA:"Percentage:97%"}
 ]
  
  const ProjectList = [
    {  Name: "PORTFOLIO USING REACTJS",Expl:"I have mentioned my achievements,skills,projects in this portfolio",Tools:"VS Code",Link:"https://github.com/IndumathiBalakrishnan/Porfolio"},
    {  Name: "WHATSAPP  WEB UI CLONE USING REACTJS",Expl:"The Whatsapp Web UI Clone contains the contact list of a person and we can send message to the particular person by using the chat window",Tools:"VS Code",Link:"https://github.com/IndumathiBalakrishnan/whatsapp_UI_Clone" },
    {  Name: "GMEET UI CLONE USING REACTJS",Expl:" The Gmeet UI Clone contains the design of access permission and the grid view of partcipants",Tools:"VS Code",Link:"https://github.com/IndumathiBalakrishnan/Gmeet_UI_Clone" },

]
const AchievementList=[
  {Achievement:"Participated in National Level BIO-COMM Hackathon"},
  {Achievement:"Class topper and a free seat student"},
  {Achievement:"School third in secodary school education"},
  {Achievement:"Participated in intra college sports,won 2nd prize in long jump and relay"},

]
const Hobbylist=[
  {Hobby:"JS Tutor"},
  {Hobby:"Playing cubes"},
  {Hobby:"Learning new Things"}


]
const Languagelist=[
  {language:"Tamil"},
  {language:"English"}



]
  return (
    <div className="Container">
      <div className="leftside-content">
        <div className="Picture">


          <img src={Photo} className="Picture-size" />

          <div className="Name-content">
            <h2>INDUMATHI BALAKRISHNAN</h2>
            <h3>FRONT-END DEVELOPER</h3>
            <br></br>

          </div>
        </div>
        <hr />
        <br></br>
        <div className="Contact-title">
          <h4 style={{ color: "gold" }}>CONTACT INFO</h4>
          <div className="Contact-Info">
            <p><PhoneOutlined style={{ transform: "rotate(90deg)", fontSize: "25px", color: "white" }} /><span className="Space">8754292498</span></p>
            <p><MailOutlined style={{ fontSize: "20px", color: "white" }} /><span className="Space">indumathis1612@gmail.com</span></p>
            <p><LinkedinOutlined style={{ fontSize: "20px", color: "white" }} /> <a className="Space" href="https://www.linkedin.com/in/indumathib/"
              style={{ color: "lightblue" }}>https://www.linkedin.com/in/indumathib/</a></p>
            <p><EnvironmentOutlined style={{ fontSize: "20px", color: "white" }} /><span className="Space">Trichy,Tamilnadu,India</span></p>

          </div>
          <br></br>
          <div>
          <h4 style={{ color: "gold" }}>EDUCATION</h4>
          {
                                EducationList.map((userData) => {
                                        const {Course,Institute,Place,CGPA } = userData;
                                        return <Education  Course={Course} Institution={Institute} Place={Place} CGPA={CGPA} ></Education>;
                                    })}
            <br></br>


          </div>
          <div className="skills">
            <h4 style={{ color: "gold" }}>PROFESSIONAL SKILLS</h4>
            <ol style={{ color: "white" }}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JAVASCRIPT</li>
              <li>ES6</li>
              <li>React JS</li>
            </ol>

          </div>
        </div>


      </div>

      <div className="rightside-content">
        <div>

          <h3><b>PROFESSIONAL SUMMARY</b></h3>
          <p>Dedicated Test Engineer with good technical, analytical, and communication skills demonstrated by 10 months of experience. Meticulous and thorough and will not give up until products are perfected.</p>
        </div>
        <div>
          <h3><b>EXPERIENCE</b></h3>
          <div className="Experience">
            <div className="Round-icon"></div>
            <div className="Text-size">Episource India Pvt. Ltd.</div>
          </div>

          <div style={{ color: "#000076",paddingLeft:"43px"}}>Jun 2021-Present</div>
        </div>
        <div>
          <h3 style={{position:"relative",top:"19px"}}><b>PROJECTS</b></h3>
         <p></p>
          {
                                ProjectList.map((userData) => {
                                        const { Name,Expl,Tools,Link } = userData;
                                        return <Project  Name={Name} Expl={Expl} Tools={Tools} Link={Link} ></Project>;
                                    })}
                                    
        </div>
        <div>
          <h3><b>ACHIEVEMENTS</b></h3>
          {
                                AchievementList.map((userData) => {
                                        const {Achievement} = userData;
                                        return <Achievements Achievement={Achievement}></Achievements>;
                                    })}
                                   
        

          
        </div>
        
        <div>
          <h3><b>HOBBIES</b></h3>
          {
                              Hobbylist.map((userData) => {
                                        const {Hobby} = userData;
                                        return <Hobbies Hobby={Hobby}></Hobbies>;
                                    })}
                                  
        </div>
        <div>
          <h3><b>Language</b></h3>
          {
                              Languagelist.map((userData) => {
                                        const {language} = userData;
                                        return <Language language={language}></Language>;
                                    })}
        </div>
      </div>


    </div>



  );
};

export default App;
