import "./intro.css";
import Me from "../../img/silviocesar1.png";
import {AiOutlineCheckCircle} from "react-icons/ai"

const Intro = () => {
  return (
    <>
      <section id="home">
        <div className="i">
          <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro">Silvio Cesar Junior</h2>
              <h1 className="i-name">Jr. Front end developer</h1>
              <p className="i-desc">
                <AiOutlineCheckCircle /> HTML | ReactJs | React native | MongoDb | Firebase.  <br/>
                <AiOutlineCheckCircle /> Styled CSS Netlify | Heroku | Github.io - deploy front-end.  <br/>
                <AiOutlineCheckCircle /> Through networking and free work, LandingPage, Api and App 
                mobile.
              </p>
            </div>
          </div>
            <img className="i-img" src={Me} alt="" />
          </div>
      </section>
    </>
  );
};

export default Intro;
