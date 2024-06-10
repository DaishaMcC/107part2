import { useContext } from "react";
import "./cart.css";
import DataContext from "../context/dataContext";

function Cart(){
    let cart = useContext(DataContext).cart;

    function getNumOfProds() {
        let total = 0;
        for(let i=0; i < cart.length; i++) {
                let prod = cart[i];
                total += prod.quantity;
        }

        return total;
    }

    function getTotal(prod){
        let total = prod.quantity * prod.price;
        return total.toFixed(2);
    }

    return (
        <div className="cart">
            <h1>Ready to check out!, We are almost there</h1>
            <h5>We have {getNumOfProds()} product ready for you</h5>

            <div className="list">
                {cart.map(prod => <div className="cart-prod">
                    <img src={"/image/" + prod.image} alt="" />
                    <h4>{prod.title}</h4>
                    <label>${prod.price.toFixed(2)}</label>
                    <label>${prod.quantity}</label>
                    <label>${getTotal(prod)}</label>
                    <button className="btn btn-sm btn-outline-dark">Remove</button>
                </div> )}
            </div>
        </div>
    );
}

export default Cart;