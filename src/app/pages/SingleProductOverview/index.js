import { useEffect } from 'react';
import { useParams } from "react-router";
import ReactLoading from 'react-loading';
import { useSelector, useDispatch } from 'react-redux';

import content from '../../redux/inventory';
import { Layout } from '../../components/complex'

function SingleProductOverview() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const product = useSelector(content.selectors.singleProduct);
    const loading = useSelector(content.selectors.loading);

    useEffect(() => {
        dispatch(content.actions.getSingleProduct(id));
    }, [id])

    return(
        <Layout>
            <section className='single-entry-main'>
                {loading ? <ReactLoading type='spin' color='gray' height='30px' width='60px' /> : ''}
                        <div className='se-photo-container' id={product.id}>
                            <img src={product.photo} alt='product' className='se-photo'/>
                        </div>
                        <div className='se-desc-container'>
                            <h1 className='desc-title'>{product.title}</h1>
                            <p className='desc-info'>{product.description}</p>
                            <p className='desc-price'>{product.price + '$ per serving'}</p>
                        </div>
            </section>
        </Layout>
    )
}

export default SingleProductOverview;