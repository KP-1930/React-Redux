 import {createStore, applyMiddleware} from 'redux'
 import rootReducer from "./reducers/index"
//  import thunk from "redux-thunk" 

//  const store  = createStore(rootReducer, applyMiddleware(thunk))

 const store  = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 export default store