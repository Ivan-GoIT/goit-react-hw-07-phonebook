import { devToolsEnhancer } from '@redux-devtools/extension';
import {  createStore } from 'redux';
import { initialState } from './rootInitialState';
import { rootReducer } from './rootReduser';



const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, initialState, enhancer);



