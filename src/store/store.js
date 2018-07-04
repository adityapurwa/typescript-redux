"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducer_1 = require("./module/auth/reducer");
const store = redux_1.createStore(redux_1.combineReducers({
    auth: reducer_1.default
}));
const state1 = store.getState();
console.dir(state1);
