import AnsQuestions from './AnsQuestions'
import UnAnsQuestions from './UnAnsQuestions'
import '../../App.css'
import { useState } from 'react'
import { connect } from 'react-redux'

function Dashboard(props) {

    const [ans, setAns] = useState(false)

    const AnsQues = () => {

        setAns(true)
    }

    const UnAnsQues = () => {

        setAns(false)
    }
   
    const { answeredQuestionsIDs, unansweredQuestionsIDs } = props
    return (


        <div className="questions-type" >

            <div className='btns' >

                <span className="border-right"   >
                    <button onClick={UnAnsQues} className={ans ? null : "activeX"}>
                        UnAnsweredQuestions
                    </button>
                </span>

                <span >
                    <button onClick={AnsQues}>
                        AnsweredQuestions
                    </button>
                </span>

            </div>


            <div className='questions'>

                {ans ? <AnsQuestions questionsIDs={answeredQuestionsIDs} /> : <UnAnsQuestions questionsIDs={unansweredQuestionsIDs} />}

            </div>


        </div>
    )


}



const mapStateToProps = ({ users, questions, loggedUser }) => {


    const Questions = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const userAnswers = Object.keys(users[loggedUser].answers)
    const unansweredQuestions = []
    const answeredQuestions = []



    Questions.forEach(id => userAnswers.includes(id) ? answeredQuestions.push(id) : unansweredQuestions.push(id))




    return {
        
        answeredQuestionsIDs: answeredQuestions,
        unansweredQuestionsIDs: unansweredQuestions
    }

}



export default connect(mapStateToProps)(Dashboard)