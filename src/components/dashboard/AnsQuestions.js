import React from "react";
import '../../App.css'
import Questions from './Questions'

export default function AnsQuestions(props) {

    const { questionsIDs } = props
    
        
    return (


       

            <ul  className='list-questions'>


                {questionsIDs.map(id => <li key={id}> <Questions ID={id} />  </li>)}

            </ul>

     
    )


}