import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer } from './components/reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
})
const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhanced(applyMiddleware(thunk)))

export default store