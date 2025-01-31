// components/ProductCard.jsx
"use client";
import { useRouter } from "next/navigation";
import axios from "axios";

function ProductCard({ product }) {
    const router = useRouter();

    const handleDelete = async (id) => {
        if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
        try {
            await axios.delete(`/api/products/${id}`);
            router.refresh();
        } catch (error) {
            console.error(error);
        }
        }
    };

    return (
        <div className="product-card">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <div className="buttons">
            <button
            className="edit-btn"
            onClick={() => router.push(`/products/edit/${product.id}`)}
            >
            Editar
            </button>
            <button className="delete-btn" onClick={() => handleDelete(product.id)}>
            Eliminar
            </button>
        </div>

        <style jsx>{`
            .product-card {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 1rem;
            }
            .buttons {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
            }
            .edit-btn {
            background: #3b82f6;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            }
            .delete-btn {
            background: #ef4444;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            }
            .price {
            font-weight: bold;
            color: #3b82f6;
            }
        `}</style>
        </div>
    );
}

export default ProductCard;
