import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {mainReducer} from "./mainReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";


const reducers = combineReducers({
    main: mainReducer
})

export type RootState = ReturnType<typeof reducers>
export const useTypedUseSelector: TypedUseSelectorHook<RootState> = useSelector

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))