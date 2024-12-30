import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './userSlice';
//combiner tous les reducers
const rootReducer = combineReducers({
  user: userSlice
});

export default rootReducer;
