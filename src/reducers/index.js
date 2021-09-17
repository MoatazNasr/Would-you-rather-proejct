import { combineReducers } from "redux";
import loggedUser from './loggedUser'
import questions from './questions'
import users from './users'



export default combineReducers(
    {
        loggedUser
        , questions,
        users
    })