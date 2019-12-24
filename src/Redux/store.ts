import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import commonReducer from "Redux/Reducers";

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export default createStore(commonReducer, applyMiddleware(...middlewares));