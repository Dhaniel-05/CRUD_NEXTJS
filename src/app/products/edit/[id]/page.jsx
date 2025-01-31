"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

function EditProductPage({ params }) {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ""
    })
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const loadProduct = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`/api/products/${params.id}`)
            console.log("Datos cargados:", data)
            setProduct({
            name: data.name || "",
            price: data.price || 0,
            description: data.description || ""
            })
        } catch (error) {
            console.error("Error cargando el producto:", error)
            alert("Error al cargar el producto")
        } finally {
            setLoading(false)
        }
        }

        if (params.id) {
        loadProduct()
        }
    }, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        await axios.put(`/api/products/${params.id}`, product)
        router.refresh()
        router.push('/products')
        } catch (error) {
        console.error("Error actualizando:", error)
        alert("Error al actualizar el producto")
        }
    }

    const handleChange = (e) => {
        const value = e.target.name === 'price' 
        ? parseFloat(e.target.value) 
        : e.target.value

        setProduct({
        ...product,
        [e.target.name]: value
        })
    }

    if (loading) {
        return <div className="loading">Cargando producto...</div>
    }

    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="edit-form">
            <h2>Editar Producto</h2>
            
            <div className="form-group">
            <label htmlFor="name">Nombre del Producto:</label>
            <input 
                type="text" 
                id="name"
                name="name" 
                value={product.name} 
                onChange={handleChange} 
                className="form-control"
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="price">Precio:</label>
            <input 
                type="number" 
                id="price"
                name="price" 
                value={product.price} 
                onChange={handleChange} 
                className="form-control"
                step="0.01"
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="description">Descripción:</label>
            <textarea 
                id="description"
                name="description" 
                value={product.description} 
                onChange={handleChange} 
                className="form-control"
                required
            />
            </div>

            <div className="buttons">
            <button type="submit" className="submit-btn">
                Actualizar Producto
            </button>
            <button 
                type="button" 
                className="cancel-btn"
                onClick={() => router.push('/products')}
            >
                Cancelar
            </button>
            </div>
        </form>

        <style jsx>{`
            .container {
            max-width: 600px;
            margin: 2rem auto;
            padding: 0 1rem;
            }
            .edit-form {
            background: #f3f4f6;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .form-group {
            margin-bottom: 1rem;
            }
            .form-control {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #cbd5e1;
            border-radius: 4px;
            margin-top: 0.25rem;
            background: white;
            color: #1f2937;
            }
            textarea.form-control {
            min-height: 100px;
            resize: vertical;
            }
            .buttons {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
            }
            .submit-btn, .cancel-btn {
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            flex: 1;
            font-weight: bold;
            }
            .submit-btn {
            background: #3b82f6;
            color: white;
            border: none;
            }
            .cancel-btn {
            background: #ef4444;
            color: white;
            border: none;
            }
            .submit-btn:hover {
            background: #2563eb;
            }
            .cancel-btn:hover {
            background: #dc2626;
            }
            .loading {
            text-align: center;
            padding: 2rem;
            font-size: 1.2rem;
            color: #1f2937;
            }
            h2 {
            margin-top: 0;
            margin-bottom: 1.5rem;
            color: #1f2937;
            font-size: 1.5rem;
            font-weight: bold;
            }
            label {
            color: #1f2937;
            display: block;
            margin-bottom: 0.25rem;
            font-weight: 500;
            }
        `}</style>
        </div>
    )
}

export default EditProductPage