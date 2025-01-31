// components/ProductButtons.jsx
"use client"
import { useRouter } from "next/navigation"
import axios from "axios"

function ProductButtons({ productId }) {
    const router = useRouter()

    const handleDelete = async () => {
        if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        try {
            await axios.delete(`/api/products/${productId}`)
            router.refresh()
        } catch (error) {
            console.error(error)
        }
        }
    }

    return (
        <div className="buttons">
        <button 
            className="edit-btn" 
            onClick={() => router.push(`/products/edit/${productId}`)}
        >
            Editar
        </button>
        <button 
            className="delete-btn" 
            onClick={handleDelete}
        >
            Eliminar
        </button>
        </div>
    )
}

export default ProductButtons