import {
    _saveQuestion
    , _saveQuestionAnswer
    , _getQuestions,
    _getUsers
} from "./_DATA";




export function saveQuestion(Q) {

    return _saveQuestion(Q)
}

export function getInitialData() {

    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))


}

export function saveQuestionAnswer({authedUser,qid,answer}) {
    const data = {authedUser,qid,answer}
    return _saveQuestionAnswer(data)
}