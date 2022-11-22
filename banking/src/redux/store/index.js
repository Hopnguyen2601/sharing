import { compose, createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  username: 'Arlyn',
  totalAmount: 50000,
};

const store = createStore(
  reducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
