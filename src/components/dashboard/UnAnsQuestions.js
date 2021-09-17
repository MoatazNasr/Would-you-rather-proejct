import React from "react";
import Questions from './Questions'
import '../../App.css'

export default function UnAnsQuestions(props) {

    const { questionsIDs } = props

    return (

                <ul className='list-questions' >


                    {questionsIDs.map(id => <li key={id}> <Questions ID={id} />  </li>)}

                </ul>

          
    )


}



