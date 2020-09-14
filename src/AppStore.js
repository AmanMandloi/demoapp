import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './Components/Reducer';
// const logger = (store) => (next) => (action) => {
// 	return next(action);
// } 
const sagaMiddleware = createSagaMiddleware();

const AppStore = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware,thunk)
)
export default AppStore;