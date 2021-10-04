import { useState } from 'react';
import { useDispatch } from 'react-redux';

import content from '../../../redux/inventory';

function Bucketitems({id, name, price, quantity, image}) {
    const dispatch = useDispatch();
    const [value, setValue] = useState(quantity);

    return(
        <div className='bucket-item' id={id}>
            <div className='bucket-image-container'>
                <img src={image} alt='food-item' className='bucket-image'/> 
            </div>
            <div className='bucket-text-container'>
                <p className='bucket-product'>{name}</p>
                <p className='bucket-price'>{price + '$ per serving'}</p>
                <p className='bucket-quantity'>{quantity + 'x'}</p>
            </div>
            <div className='bucket-button-container'> 
                <button onClick={() => dispatch(content.actions.addToCart(id, Number(value)))} className='bucket-button'>+</button>
                <input onChange={(e) => {setValue(e.target.value)}} className='bucket-input'/>
                <button onClick={() => dispatch(content.actions.subFromCart(id, Number(value)))} className='bucket-button'>-</button>
            </div>
            <button onClick={() => dispatch(content.actions.removeFromCart(id))} className='bucket-button-remove'>Remove</button>
        </div>
    )
}

export default Bucketitems;