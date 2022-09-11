import "./productList.css";
import Product from "../product/Product";
import Arquiteta from "../../img/arquiteta.png";
import Blog from "../../img/blog.png";
import Site from "../../img/site.png";
import Site1 from "../../img/site1.png";
import NR from "../../img/nr.png";
import Bootcamp from "../../img/bootcamp.png";
import Bankline1 from "../../img/bankline1.jpg";
import Bankline2 from "../../img/bankline2.jpg";
import Quizz from "../../img/quiz.png";
import Adivinha from "../../img/adivinha.png";
import Calculadora from "../../img/calculadora.png";
import Pedal from "../../img/app-bike.jpg";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire</h1>
                <p className="pl-desc">
                    It is a creative portfolio for your company, shows architectural work, stunning portfolio styles for your tastes.
                </p>
            </div>
            <div className="pl-list">
                <Product img={Arquiteta} />
                <a href="https://danielearquiteta.herokuapp.com/">
                <button>View site</button></a>
                <Product img={Blog} />
                <a href="https://silvio-blog.netlify.app/">
                <button>View site</button></a>
                <Product img={Site} />
                <a href="https://portfoliodaniele.netlify.app/">
                <button>View site</button></a>
                <Product img={Site1} />
                <a href="https://portfoliodaniele.netlify.app/">
                <button>View site</button></a>
                <Product img={NR} />
                <a href="https://nrtreinamentos.netlify.app/">
                <button>View site</button></a>
                <Product img={Quizz} />
                <a href="https://testquizz.netlify.app/">
                <button>View site</button></a>
                <Product img={Bootcamp} />
                <a href="https://github.com/silviocesarjunior/Aula1_gameplay">
                <button>Source code</button></a>
                <Product img={Bankline1} />
                <a href="https://github.com/silviocesarjunior/bankline-app">
                <button>Source code</button></a>
                <Product img={Bankline2} />
                <a href="https://github.com/silviocesarjunior/bankline-api">
                <button>Source code</button></a>
                <Product img={Adivinha} />
                <a href="https://github.com/silviocesarjunior/Jogo_adivinha/blob/main/gerador_numeros">
                <button>Source code</button></a>
                <Product img={Calculadora} />
                <a href="https://github.com/silviocesarjunior/Calculator">
                <button>Source code</button></a>
                <Product img={Pedal} />
                <a href="https://github.com/silviocesarjunior/bike">
                <button>Source code</button></a>
                
            </div>
        </div>
    );
};

export default ProductList;
