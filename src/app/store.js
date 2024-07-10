import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/counter-reducer'

 const store = configureStore({
    reducer: {
      allCart: cartReducer,
    },
  });
  export default store;