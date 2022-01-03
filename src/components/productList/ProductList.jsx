import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import Bootcamp from "../../img/bootcamp.png";
import Bootcamp2 from "../../img/bootcamp2.png";
import Site from "../../img/site.png";
import Site2 from "../../img/site2.png";
import Vendas from "../../img/vendas.png";
import Vendas2 from "../../img/vendas2.png";


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
                <Product img={Bootcamp2} />
                <Product img={Bootcamp} />
                <Product img={Site} />
                <Product img={Site2} />
                <Product img={Vendas} />
                <Product img={Vendas2} />
            </div>
        </div>
    );
};

export default ProductList;
