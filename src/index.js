import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createStore, combineReducers } from 'redux'
//  instead of createStore
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
})

// console.log(store.getState())
// sample create notes
// store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(
//   createNote('combineReducers forms one reducer from many simple reducers')
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
