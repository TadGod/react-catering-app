import * as actions from './actionTypes';

const INITIAL_STATE = {
    loading: true,
    error: null,
    fullInventory: [],
    singleProduct: [],
    cart: []
};

function inventoryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GET_PRODUCTS: {
            return state;
        }
        case actions.GET_PRODUCTS_SUCCESS: {
            return {...state, loading: false, fullInventory: action.payload}
        }
        case actions.GET_PRODUCTS_FAILURE: {
            return {...state, error: action.payload}
        }
        case actions.GET_SINGLE_PRODUCT: {
            return state;
        }
        case actions.GET_SINGLE_PRODUCT_SUCCESS: {
            return {...state, loading: false, singleProduct: action.payload}
        }
        case actions.GET_SINGLE_PRODUCT_FAILURE: {
            return {...state, error: action.payload}
        } 
        case actions.PUT_INTO_CART: {
            let match = false;

            state.cart.filter(item => {
                if (item.id === action.payload.id) {
                    return match = true;
                }
            })
    
            if (!match) {
                return {
                    ...state,
                    cart: [...state.cart, 
                        {
                        id: action.payload.id,
                        name: action.payload.name,
                        quantity: action.payload.quantity,
                        price: action.payload.price,
                        image: action.payload.image
                        }
                    ]
                 }
            }
        }
        case actions.REMOVE_FROM_CART: {
            const updatedCart = () => state.cart.filter(item => {
                if (item.id === action.payload) {
                    return;
                }
                return item;
            });
            return {
                ...state,
                cart: updatedCart()
            }
        }
        case actions.ADD_TO_CART: {
            const updatedCart = () => state.cart.filter(item => {
                if (item.id === action.payload.id) {
                    item.quantity += action.payload.quantity;
                    return item;
                }
                return item;
            })
            return {
                ...state,
                cart: updatedCart()
            }
        }
        case actions.SUB_FROM_CART: {
            const updatedCart = () => state.cart.filter(item => {
                if (item.id === action.payload.id) {
                    item.quantity -= action.payload.quantity;
                    if (item.quantity <= 0) {
                        return;
                    }
                    return item;
                }
                return item;
            })
            return {
                ...state,
                cart: updatedCart()
            }
        }
        default: {
            return state;
        }   
    }
}

export default inventoryReducer;