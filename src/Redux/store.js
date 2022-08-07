import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { Appreducer } from "./Appreducer/Appreducer"
import thunk from "redux-thunk"
import { Authreducer } from "./Authreducer/Authreducer"

let rootreducer=combineReducers({Appreducer,Authreducer})
export let store=legacy_createStore(rootreducer,applyMiddleware(thunk))