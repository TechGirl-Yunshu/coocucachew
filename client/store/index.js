import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import productsReducer from './products'
import userReducer from './user'
import usersReducer from './users'
import cartStoreReducer from './cartStore'

const reducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  users: usersReducer,
  cart: cartStoreReducer,
  orderProduct: cartStoreReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './cartStore'
