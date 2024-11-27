import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// import ingredientsReducer from '../reducers/ingredientsReducer';


const store = createStore(rootReducer, composeWithDevTools());

export default store;