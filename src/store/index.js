/**
 * Created by yini on 2016/8/18.
 */
import {createStore} from 'redux';
import Reducer from '../reducers';

var configStore = function (initialStore) {
  const store = createStore(Reducer, initialStore);
  if (module.hot) {
    module.hot.accept('../reducers', ()=> {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    })
  }
  return store;
};

export  default configStore;
