import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/button';
import errorimage from '../../../assets/images/error.jpg';

function Itemcontentbox( { img, title = 'no title given', price = 'no price given', id = 'no id given', action } ) {
    return(
        <section className='main-item-container'>
            <img src={img ? img : errorimage} alt={img ? 'product' : 'error'} className='item-image' />
            <div className='main-item' id={id}>
                <Link to={`/${id}`}>
                    <p className='item-title'>{title}</p>
                </Link>
                <p className='item-price'>{price + '$ per serving'}</p>
                <Button title='Order' className='order-button' onClick={action}/>
            </div>
        </section>
    )
}

export default Itemcontentbox;