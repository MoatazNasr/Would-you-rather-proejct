import { RECEIVE_DATA ,ANSWER_QUESTION, ADD_QUESTION} from "../actions/shared"

export default function questions(state = {}, action) {


    switch (action.type) {

        case RECEIVE_DATA:

            return {
                ...state,
                ...action.questions
            }

        case ANSWER_QUESTION:
            const { qid, authedUser, answer } = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }

                }
            }

        case ADD_QUESTION:

            const {payload}=action             

            return {

                ...state,
                [payload.id]: {
                    ...payload
                }

            }

        default:
            return state
    }




}