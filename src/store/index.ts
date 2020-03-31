import { createStore, combineReducers } from 'redux'

import { notesReducer } from './notes/reducer'

const rootReducer = combineReducers({
  notes: notesReducer,
})

export const store = createStore(rootReducer)
