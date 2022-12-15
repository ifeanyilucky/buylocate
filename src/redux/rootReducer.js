import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import product from './slices/product';
import user from './slices/user';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['checkout'],
};

const rootReducer = combineReducers({
  user: user,
  product: persistReducer(productPersistConfig, product),
});

export { rootPersistConfig, rootReducer };
