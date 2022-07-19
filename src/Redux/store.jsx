import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import FormReducer from './Form/formReducer'

const rootReducer = combineReducers({
    FormReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store