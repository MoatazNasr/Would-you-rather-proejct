import React from 'react'
import { connect } from "react-redux"
import UnAnsQDetails from './UnAnsQDetails'
import AnsQDetails from './AnsQDetails'
import { formatQuestion } from '../../utils/helpers';
import NotMatched from '../NotMatched';

function QuestionsDetails(props) {

    if (props.error===true){
        return (
                <NotMatched/>
        )
    }

    const userID = props.user
    const {
        optionOneVotes,
        optionTwoVotes,
    } = props.question

   
    
    return (

        <div style={{ color: 'black' }}>



            {optionOneVotes.includes(userID) || optionTwoVotes.includes(userID) ? (

               

            <AnsQDetails  userID={userID}  question={props.question}/>

            ) :

                <UnAnsQDetails userID={userID} question={props.question} />
            }


        </div>
    )

}


const mapStateToProps = ({ users, loggedUser, questions }, { match }) => {

    const { question_id } = match.params
    const user = loggedUser
    const questionXid = questions[question_id] 
    if (questionXid === undefined){
        
        return {error:true}
    }
    const author = users[questionXid.author]
    return {
        user,
        question:  formatQuestion(questionXid, author) ,
        error:false
    }
}





export default connect(mapStateToProps)(QuestionsDetails)