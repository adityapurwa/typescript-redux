"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const token = (state = null, action) => {
    switch (action.type) {
        case "auth/set-token":
            return action.payload;
        case "auth/flush-token":
            return null;
        default:
            return state;
    }
};
const userId = (state = null, action) => {
    switch (action.type) {
        case "auth/set-user-id":
            return action.payload;
        case "auth/flush-token":
            return null;
        default:
            return state;
    }
};
const userName = (state = null, action) => {
    switch (action.type) {
        case "auth/set-user-name":
            return action.payload;
        case "auth/flush-token":
            return null;
        default:
            return state;
    }
};
exports.default = redux_1.combineReducers({
    token,
    userId,
    userName
});
