import { getInitialData,saveQuestionAnswer, saveQuestion  } from '../utils/apis'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = "ADD_QUESTION"


function receiveData(payload) {

    return {

        type: RECEIVE_DATA,
        ...payload

    }

}

function answerQuestion(payload) {

    return {
        type: ANSWER_QUESTION,
        ...payload
    }

}

function addQuestion(payload) {

    return {
        type: ADD_QUESTION,
        payload

    }
}




export function handleAnswerQuestion(loggedUser, qid, answer) {

    const authedUser = loggedUser

    return (dispatch) => {

        saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {

                dispatch(answerQuestion({ authedUser, qid, answer }))

            })

    }

}

export function handleSaveQuestion(author, optionOne, optionTwo) {

    const question = { author, optionOneText:optionOne, optionTwoText:optionTwo }
    
    return (dispatch) => {

        saveQuestion(question)
            .then((resultedQ) => {

                dispatch(addQuestion(resultedQ))         

            })
    }

}

export function handleInitialData() {

    return (dispatch) => {

          getInitialData()
            .then(({users, questions}) => {

                dispatch(receiveData(
                    { users, questions }))


            })

    }

}

