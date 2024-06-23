import { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";

function Admin(){
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code: "",
        discount: "",
    });

    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        catagory: "",
    });


    async function loadProducts() {
        let res = await axios.get("http://127.0.0.1:5000/api/products");
        setAllProducts(res.data);
    }

    useEffect(function(){
        loadProducts();
    }, []);

    function saveCoupon(){
        console.log("Save clicked", coupon);

        setAllCoupons([...allCoupons, coupon]);
    }

    function handleCoupon(e){
        const value = e.target.value;
        const name = e.target.name;
        
        
        let copy = {...coupon};
        copy[name] = value;
        setAllCoupons(copy);
    }

    function handleProduct(e){
        const name = e.target.name;
        const value = e.target.value;
        
        let copy = {product};
        copy[name] = value;
        setProduct(copy);
    }

    function saveProduct(){
        setAllProducts([...allProducts, product]);

        let fixedProd = {...product, price: parseFloat(product.price) };

        axios.post("http://127.0.0.1:5000/api/products", fixedProd);
    }

    return (
        <div className="admin">
            <h1>Store Administration</h1>



            <div className="parent">

                <div className="products form">
                    <h3>Register a Product</h3>

                    <div>
                        <label className="form-label">Title</label>
                        <input onChange={handleProduct} name="title" type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Price</label>
                        <input onChange={handleProduct} name="price" type="number" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Image</label>
                        <input onChange={handleProduct} name="image" type="" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Catagory</label>
                        <input onChange={handleProduct} name="catagory" type="" className="form-control" />
                    </div>


                    <button onClick={saveProduct} className="btn btn-sm btn-outline-dark">Save Product</button>

                    <hr />

                    <ul className="list">
                        {allProducts.map(prod => <li>{prod.title} - ${prod.price}</li>)}
                    </ul>
                </div>


                <div className="coupoons form">
                    <h3>Register a Coupon</h3>

                    <div>
                        <label className="form-label">Code</label>
                        <input onChange={handleCoupon} name="code" type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Discount</label>
                        <input onChange={handleCoupon} name="discount" type="text" className="form-control" />
                    </div>

                    <button onClick={saveCoupon} className="btn btn-sm btn-outline-dark">Save Coupon</button>

                    <hr />

                    <ul className="list">
                        {allCoupons.map( cp => <li>{cp.code} - ${cp.discount}</li>)}
                    </ul>

                </div>

            </div>


        </div>
    );
}

export default Admin;