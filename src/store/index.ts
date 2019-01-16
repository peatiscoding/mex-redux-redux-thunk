import { createStore, combineReducers, applyMiddleware, DeepPartial } from 'redux'
import session, { State as SessionState } from './session/reducers'
import thunk from 'redux-thunk'

export interface RootState {
  session: SessionState
}

export default createStore(combineReducers<RootState>({
  session
}), applyMiddleware(thunk))