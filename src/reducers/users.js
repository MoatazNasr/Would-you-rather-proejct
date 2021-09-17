import { RECEIVE_DATA ,ANSWER_QUESTION, ADD_QUESTION} from "../actions/shared"

export default function users(state = {}, action) {

    switch (action.type) {

        case RECEIVE_DATA:

            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION:

            const { qid, authedUser, answer } = action

            return {

                ...state,
                [authedUser]: {

                    ...state[authedUser],
                    answers : {
                        ...state[authedUser].answers,
                        [qid]:[answer]
                    }
                }
            }
        case ADD_QUESTION:
            
        const {author , id }= action.payload

        return {
            ...state,
            [author]:{
                ...state[author],
                questions: state[author].questions.concat(id)
            }
        }

        default:
            return state
    }




}