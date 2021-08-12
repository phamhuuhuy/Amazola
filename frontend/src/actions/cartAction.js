import { ADD_TO_CART, CART_SAVE_SHIPPING_ADDRESS, REMOVE_ALL_CART_ITEMS, REMOVE_CART_ITEMS, UPDATE_CART_ITEMS } from "../constants/constantsCart"

export const addToCart = (product, qty) => async (dispatch, getState) => {
    dispatch({
        type: ADD_TO_CART,
        payload: {
            name: product.name,
            image: product.image,
            price: product.price,
            product: product._id,
            qty,
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const updateCartItems = (product, qty) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_CART_ITEMS,
        payload: {
            name: product.name,
            image: product.image,
            price: product.price,
            product: product.product,
            qty,
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeCartItems = (product) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART_ITEMS,
        payload: product
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeAllCartItems = () => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_ALL_CART_ITEMS,
        payload: []
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}
