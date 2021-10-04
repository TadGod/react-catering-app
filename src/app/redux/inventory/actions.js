import { createAction } from 'redux-api-middleware';
import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, PUT_INTO_CART, ADD_TO_CART, SUB_FROM_CART, REMOVE_FROM_CART } from './actionTypes';

export const getInventory = () => createAction({
    endpoint: 'http://localhost:3001/inventory',
    method: 'GET',
    types: [GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE]
});

export const getInventorySuccess = (data) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: data
});

export const getInventoryFailure = () => ({
    type: GET_PRODUCTS_FAILURE,
    payload: 'Error: Unable to fetch products.'
});

export const getSingleProduct = (id) => createAction({
    endpoint: `http://localhost:3001/inventory/${id}`,
    method: 'GET',
    types: [GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAILURE]
});

export const getSingleProductSuccess = (data) => ({
    type: GET_SINGLE_PRODUCT_SUCCESS,
    payload: data
});

export const getSingleProductFailure = () => ({
    type: GET_SINGLE_PRODUCT_FAILURE,
    payload: 'Error: Unable to fetch single product.'
});

export const putIntoCart = (id, name, quantity, price, image) => ({
    type: PUT_INTO_CART,
    payload: {id, name, quantity, price, image}
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id
})

export const addToCart = (id, quantity) => ({
    type: ADD_TO_CART,
    payload: {id, quantity}
});

export const subFromCart = (id, quantity) => ({
    type: SUB_FROM_CART,
    payload: {id, quantity}
});

