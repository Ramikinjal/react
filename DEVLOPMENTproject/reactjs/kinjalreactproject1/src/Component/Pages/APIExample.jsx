import React, { useEffect, useState } from 'react';
import "./Kinjal.css"


const APIExample = () => {
    const [ProData, setProdData] = useState([]);
    const [showFullText, setShowFullText] = useState(false);
    const [loader, setloader] = useState(false);
    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    useEffect(() => {
        FetchData();
    }, []);

    const FetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const responseData = await response.json();
            console.log(responseData);
            setProdData(responseData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className='container'>
            <div className='row mt-5 justify-content-center'>
                (loader)? {ProData.map(product => (
                    <div key={product.id} className='col-lg-4 col-md-6 col-12 mb-4'>
                        <div className='card'>
                            <img className=' product-img p-5 aspect_ratio' src={product.image} alt={product.title} />
                            <div className='card-body'>
                                <h3 className='card-title text-truncate'>{product.title}</h3>
                                <p className='card-text'>
                                    {/* {product.description} */}
                                    {/* {product.description} */}
                                    {showFullText ? product.description : `${product.description.slice(0, 100)}`}
                                    {product.description.length > 100 && (
                                        <button className="btn btn-link" onClick={toggleText}>
                                            {showFullText ? 'Read Less' : 'Read More'}
                                        </button>
                                    )}
                                </p>
                                <button type="button" class="btn mx-auto d-block btn-primary" >Button</button>
                            </div>
                        </div>
                    </div>
                ))}:<>no data</>
            </div>
        </div>
    );
};

export default APIExample;
