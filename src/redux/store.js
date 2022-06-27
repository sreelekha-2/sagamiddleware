
import {configureStore} from "@reduxjs/toolkit"

import userReducer from "./userReducer"

import { getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga"

import mySaga from "./mysaga";
const sagaMiddleware = createSagaMiddleware()


export const store=configureStore({
    reducer:userReducer,
    middleware:[...getDefaultMiddleware(),sagaMiddleware]
})

sagaMiddleware.run(mySaga)