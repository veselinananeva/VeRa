import authReducer from './authReducer'
import testReducer from './testReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers(
    {
        //auth updeitwa state na authReducer
        auth: authReducer,
        //test updeitwa state na testReducer
        test: testReducer
    }
);

export default rootReducer