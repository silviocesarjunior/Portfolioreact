import React from "react";
import "./skills.css";
import CSS from "../../img/css.png";
import Javascript from "../../img/javascript.png";
import Firebase from "../../img/firebase.png";
import Html from "../../img/html5.png";
import Java from "../../img/java.png";
import MongoDb from "../../img/mongodb.png";
import Netlify from "../../img/netlify.png";
import Reactjs from "../../img/react.png";
import Ruby from "../../img/ruby.png";
import Nodejs from "../../img/nodejs.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="f">
        <div className="skills">SKILLS</div>
        <div className="container">
          <div className="element">
            <div>Frontend</div>
            <abbr title="Javascript">
              <img src={Javascript} alt="Javascript" />
            </abbr>
            <abbr title="Reactjs">
              <img src={Reactjs} alt="Reactjs" />
            </abbr>
            <abbr title="CSS">
              <img src={CSS} alt="CSS" />
            </abbr>
            <abbr title="Html">
              <img src={Html} alt="HTML5" />
            </abbr>
          </div>
          <div className="element">
            <div>Backend</div>
            <abbr title="Nodejs">
              <img src={Nodejs} alt="Nodejs" />
            </abbr>
            <abbr title="Ruby">
              <img src={Ruby} alt="Ruby" />
            </abbr>
            <abbr title="Java">
              <img src={Java} alt="Java" />
            </abbr>
          </div>
          <div className="element">
            <div>Database</div>
            <abbr title="MongoDb">
              <img src={MongoDb} alt="MongoDb" />
            </abbr>
            <abbr title="Firebase">
              <img src={Firebase} alt="Firebase" />
            </abbr>
          </div>
          <div className="element">
            <div>Deploy</div>
            <abbr title="Netlify">
              <img src={Netlify} alt="Netlify" />
            </abbr>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
