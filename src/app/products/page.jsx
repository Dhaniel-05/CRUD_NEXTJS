import styles from './ProductsPage.css';
import axios from "axios"

async function loadProducts(){
    const {data} = await axios.get('http://localhost:3000/api/products')
    return data;
}

async function ProductsPage() {
    const products = await loadProducts();
    console.log(products);

    return <div className="container">
        {products.map(product =>(
            <div key={product.id} className="productKey"> 
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
        </div>
        ))}
    </div>;
}

export default ProductsPage
