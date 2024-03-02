import React, { useState, useEffect } from 'react';

export default function Cart() {
    const [quan, setQuan] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            storedProducts.push(JSON.parse(value));
        }
        setProducts(storedProducts);
    }, []);

    const inc = () => {
        setQuan(quan + 1);
    };

    const dec = () => {
        if (quan >= 1)
            setQuan(quan - 1);
    };

    const fun = (item) => {
        alert('Removed from wishlist');
        localStorage.removeItem(item.id);
    };

    return (
        <>
            <h2>Cart</h2>
            <div className='box-1'>
                {products.map((item, index) => (
                    <div className='category' key={index}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt='img' />
                        <h3>{item.brand}</h3>
                        <h4>₹{item.price}</h4>
                        <button className='btn-card' onClick={() => fun(item)}>Remove from Cart</button>
                        <br></br>
                        <button className='btn-card' onClick={inc}>+</button>
                        <span>{item.count+quan}</span>
                        <button className='btn-card' onClick={dec}>-</button>
                    </div>
                ))}
            </div>
        </>
    );
}
