"use client"
import { useRef, useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

function ProductForm() {
    const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: ""
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const form = useRef(null);
    const router = useRouter()

    const handleChange = e => {
        setProduct({
        ...product,
        [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(product);

    try {
        const res = await axios.post('/api/products', product);
        console.log(res);
        form.current.reset();
        router.push('/products')
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
        } catch (error) {
        console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} ref={form}>
        <label htmlFor="name">Product Name</label>
        <input type="text" name="name" placeholder="name" onChange={handleChange} />

        <label htmlFor="price">Product Price:</label>
        <input type="text" name="price" placeholder="000000.00" onChange={handleChange} />

        <label htmlFor="description">Product Description:</label>
        <textarea name="description" placeholder="description" onChange={handleChange} />

        <button>Save Product</button>

        {showSuccessMessage && (
            <div className="success-message">
            <p>Producto creado con éxito</p>
            </div>
        )}

        <style jsx>{`
            form {
            background-color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border-radius: 0.5rem;
            padding: 2rem 1.5rem;
            max-width: 400px;
            margin: 2rem auto;
            }

            label {
            display: block;
            font-weight: bold;
            margin-bottom: 0.5rem;
            }

            input {
            display: block;
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 0.25rem;
            margin-bottom: 1rem;
            color: #333;
            }

            textarea {
            display: block;
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 0.25rem;
            margin-bottom: 1rem;
            resize: vertical;
            min-height: 100px;
            color: #333;
            }

            button {
            background-color: #3b82f6;
            color: #fff;
            border: none;
            padding: 0.5rem 1rem;
            font-weight: bold;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            }

            button:hover {
            background-color: #2563eb;
            }

            .success-message {
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.25rem;
            text-align: center;
            }
        `}</style>
        </form>
    )
    }

    export default ProductForm;
