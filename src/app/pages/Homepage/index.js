import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';

import { Layout, ItemContentBox, BucketItems } from '../../components/complex';
import mainphoto from '../../assets/images/catering.jpg';

import content from '../../redux/inventory';

function Homepage() {
    const dispatch = useDispatch();

    const [category, setCategory] = useState('');
    const cart = useSelector(content.selectors.cart) || [];
    const products = useSelector(content.selectors.fullInventory) || [];
    const loading = useSelector(content.selectors.loading);

    useEffect(() => {
        dispatch(content.actions.getInventory())
    }, [category]);


    return(
        <Layout>
            <img src={mainphoto} alt='hero' className='main-photo' onClick={() => {console.log(cart)}}/>
            <section className='main-container'>
                <section className='main-itemization'>
                    <div className='main-nav'>
                        <ul className='nav-categories'>
                            <li className='category' onClick={() => {setCategory('Meals')}}>Meals</li>
                            <li  className='category' onClick={() => {setCategory('Vegetarian')}}>Vegetarian</li>
                            <li  className='category' onClick={() => {setCategory('Drinks')}}>Drinks</li>
                            <li  className='category' onClick={() => {setCategory('Desserts')}}>Desserts</li>
                            <li  className='category' onClick={() => {setCategory('')}}>All</li>
                        </ul>
                    </div>
                    <div className='main-items'>
                        {loading ? <ReactLoading type='bars' color='gray' height='60px' width='60px' /> : ''}
                        {!category ? products.map(({ _id, title, photo, price, action }) => (
                            <ItemContentBox title={title} id={_id} key={_id} img={photo} price={price} action={() => dispatch(content.actions.putIntoCart(_id, title, Number(1), price, photo))}/>
                        )) : products.filter(product => product.category === category).map(({ _id, title, photo, price, action }) => (
                            <ItemContentBox title={title} id={_id} key={_id} img={photo} price={price} action={() => dispatch(content.actions.putIntoCart(_id, title, Number(1), price, photo))} />
                        ))}
                    </div>
                </section>
                <section className='bucket'>
                    <div className='bucket-header'>
                            <p className='bucket-title'>My Bucket</p>
                    </div>
                    <div className='bucket-items'>
                        {cart.map(({ id, name, price, quantity, image}) => (
                            <BucketItems id={id} key={id} name={name} price={price} quantity={quantity} image={image} />
                        ))}
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default Homepage;