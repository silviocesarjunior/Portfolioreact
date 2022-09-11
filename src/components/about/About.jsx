import "./about.css"
import Sobre from "../../img/about.jpg";
import Decolar from "../../img/foguete.png";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Sobre}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Silvio Cesar Junior
                </p>
                <p className="a-desc">
                I am a professional with experience in computer and laptop maintenance, with some post-college projects as a front-end and back-end developer with Javascript, React, React native, Bulma and Java programming languages. Styles with CSS. 
                </p>
                <div className="a-award">
                    <img src={Decolar} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Time for takeoff</h4>
                        <p className="a-award-desc">
                            2023 here I come
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
