import Product from "../components/product";
import "./catalog.css";

function Catalog() {
    return (
        <div className="catalog">
            <h1>Check out catalog!</h1>
            <div className="list">
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
}

export default Catalog;