import {combineReducers, configureStore} from '@reduxjs/toolkit'
import apisReducer from './slices/apiSlice'
import sidebarReducer from './slices/siderbarSlice'

const store = configureStore({
  reducer: combineReducers({
    apis: apisReducer, 
    sidebar: sidebarReducer,
  })
})

export default store;