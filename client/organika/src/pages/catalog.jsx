import Product from "../components/product";
import "./catalog.css";

function Catalog() {

    let catagories = ["Fruit", "Apparel", "Dairy", "Supplement"];

    let products = [
        {
            title: 'Banana',
            category: 'Fruit',
            price: 0.89,
            image: 'banana.jpg',
            _id: '1',
            
        },
        {
            title: 'Hoodie',
            category: 'Apparel',
            price: 10.00,
            image: 'hoodie.jpg',
            _id: '2',
            
        },
        {
            title:'Beanie',
            category:'Apparel',
            price: 5.00,
            image:'beanie.jpg',
            _id: '3',
        },
        {
            title: 'Eggs',
            category: 'Dairy',
            price: 2.98,
            image: 'eggs.jpg',
            _id: '4',
            
        },
        {
            title: 'Iron',
            category: 'Supplement',
            price: 11.89,
            image: 'iron.jpg',
            _id: '5',
            
        },
        {
            title: 'Milk',
            category: 'Dairy',
            price: 3.69,
            image: 'milk.jpg',
            _id: '6',
            
        },
        {
            title: 'Shirt',
            category: 'Apparel',
            price: 8.50,
            image: 'shirt.jpg',
            _id: '7',
            
        },
        {
            title: 'Crocs',
            category: 'Apparel',
            price: 20.00,
            image: 'crocs.jpg',
            _id: '8',
            
        },
    ];

    return (
        <div className="catalog">
            <h1>Check out our catalog!</h1>

            <div className="filters">
                    {catagories.map(cat => <button className="btn btn-sm btn-outline-dark">{cat}</button>)}
            </div>

            <div className="list">
                {products.map( prod => <Product key={prod._id} data={prod} />)}
            </div>
        </div>
    );
}

export default Catalog;