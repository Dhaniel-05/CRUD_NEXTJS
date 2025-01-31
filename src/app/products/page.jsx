// app/products/page.jsx
import axios from "axios"
import ProductButtons from "@/components/ProductButtons"
import "@/styles/ProductCard.css"

async function loadProducts() {
    const { data } = await axios.get('http://localhost:3000/api/products')
    return data
    }

    async function ProductsPage() {
    const products = await loadProducts()

    return (
        <div className="products-container">
        <div className="product-grid">
            {products.map(product => (
            <div key={product.id} className="product-card">
                <h2>{product.name}</h2>
                <p className="price">${product.price}</p>
                <p>{product.description}</p>
                <ProductButtons productId={product.id} />
            </div>
            ))}
        </div>
        </div>
    )
}

export default ProductsPage