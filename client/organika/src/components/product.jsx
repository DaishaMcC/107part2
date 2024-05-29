import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(){

    function add() {
        console.log("Add clicked");
    }

    return(
        <div className="product">
            <img src="https://picsum.photos/seed/picsum/200/200" />
            <h4>Prod title</h4>

            <label className="total">$total</label>
            <label className="price">$price</label>

            <QuantityPicker></QuantityPicker>
            <button onClick={add} className="btn btn-sm btn-primary">Add</button>
        </div>
    );
}

export default Product;