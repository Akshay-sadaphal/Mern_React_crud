import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const ProductModal = ({ product, onClose }) => {
    return (
        <div className="product-modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <div className="modal-body">
                    <img src={product.imageUrl} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    {/* Add more product details here */}
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    const products = [
        {
            id: 1,
            name: 'APPLE iPhone 14 (Midnight, 128 GB)',
            price: 67.999,
            imageUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70', // Replace with actual image URL
        },
        
        {
            id: 2,
            name: 'APPLE iPhone 14 (Starlight, 128 GB)',
            price: 67.999,
            imageUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70', // Replace with actual image URL
        },
        {
            id: 3,
            name: 'APPLE iPhone 13 (Midnight, 128 GB)',
            price: 59.499,
            imageUrl: 'https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70', // Replace with actual image URL
        },{
            id: 4,
            name: 'APPLE iPhone 14 (Midnight, 128 GB)',
            price: 67.999,
            imageUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70', // Replace with actual image URL
        },
        
        {
            id: 5,
            name: 'APPLE iPhone 14 (Starlight, 128 GB)',
            price: 67.999,
            imageUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70', // Replace with actual image URL
        },

    ];

    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container">
            <h1 className="home-title">Welcome to Our E-commerce Store</h1>
            <div className="product-list">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                            <button onClick={() => openModal(product)} className="details-link">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
        </div>
    );
};

export default Home;
