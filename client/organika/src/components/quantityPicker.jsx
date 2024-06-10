//import
import { useState } from "react";
import "./quantityPicker.css";

//logic
function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function decrease() {
        let val = quantity - 1;
        if (val > 0) {
            setQuantity(val);
            props.onChange(val);
        }
    }

    function increase() {
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    return (
        <div className="qty=picker">
            <button className="btn btn-sm btn-outline-info" onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-info" onClick={increase}>+</button>
        </div>
    );
}
//export
export default QuantityPicker;