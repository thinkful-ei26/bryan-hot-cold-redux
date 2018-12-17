import { createStore, combineReducers } from 'redux';
import reducer from './reducers';

export default createStore(reducer)
// if multiple reducers could use export default createStore(
//   combineReducers({
//     val1: val1Reducer,
//     val2: val2Reducer
//   })
// )