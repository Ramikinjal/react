import React from 'react';
import CustomCard from './04CustomCard';
// import './data.json'

const PropsFunctionalComponentInReact = () => {
    let ProductData = [{ "id": 5, "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", "price": 695, "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", "category": "jewelery", "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 4.6, "count": 400 } }, { "id": 6, "title": "Solid Gold Petite Micropave ", "price": 168, "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.", "category": "jewelery", "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 3.9, "count": 70 } }, { "id": 7, "title": "White Gold Plated Princess", "price": 9.99, "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...", "category": "jewelery", "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 3, "count": 400 } }, { "id": 8, "title": "Pierced Owl Rose Gold Plated Stainless Steel Double", "price": 10.99, "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel", "category": "jewelery", "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 1.9, "count": 100 } }]
    let ProductListData = ProductData.map((val) => {
        return <div className="col-3"><CustomCard title={val.title}
            image={val.image}
            rating={val.rating.rate}
            price={val.price}
            discription={val.discription} /></div>
    })
    return (
        <>
            <div class="alert alert-warning">
                <h1>PropsFunctionalComponentInReact:-</h1>
                <h3>kinjal.rami2002@gmail.com</h3>

            </div>
            <div class="alert alert-success">
                <h2>what is props?</h2>
                <h6><b>Define:-</b></h6><p> "Props" stands for "properties."</p>
                <h6><b>Usage:-</b></h6><p>It refers to the data passed to a component, similar to how parameters are passed to a function.</p>
                <h6><b>Purpose:-</b></h6><p>Props allow components to be flexible and reusable, as they can receive different sets of data and behave accordingly.</p>

                <h2>What is props used for in React?</h2>
                <p>Props are used to store data that can be accessed by the children of a React component. They are part of the concept of reusability. Props take the place of class attributes and allow you to create consistent interfaces across the component hierarchy. In this article, we'll learn about props in React.</p>

                <img width="400px" src="https://scrimba.com/articles/content/images/2022/10/image-10.png" alt="" />
            </div>
            <div className="row">
                {ProductListData}
            </div>
        </>
    );
};
export default PropsFunctionalComponentInReact;
