import "./about.css";
import Sobre from "../../img/about.jpg";
import Decolar from "../../img/foguete.png";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="a">
          <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img src={Sobre} alt="" className="a-img" />
            </div>
          </div>
          <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">Silvio Cesar Junior</p>
            <p className="a-desc">
              Married, I am 30 years old and father of a beautiful little girl
              of 3 years old, where I seek to offer the best quality of life
              within my possibilities. Currently I work in a clt regme as a pcp
              assistant and act as a freelancer in my spare time, I seek to work
              with a collaborative and challenging team. I try to gain knowledge
              from various free bootcamps throughout the year such as
              Rocketseat, Dio, Alura and JsStack.
            </p>
            <div className="a-award">
              <img src={Decolar} alt="" className="a-award-img" />
              <div className="a-award-texts">
                <h4 className="a-award-title">Time for takeoff</h4>
                <p className="a-award-desc">2023 here I come</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
