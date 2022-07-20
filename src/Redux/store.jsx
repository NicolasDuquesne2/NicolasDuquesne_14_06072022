import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import FormReducer from './Form/formReducer'
import ModalReducer from './Modal/modalReducer'

const rootReducer = combineReducers({
    FormReducer,
    ModalReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store