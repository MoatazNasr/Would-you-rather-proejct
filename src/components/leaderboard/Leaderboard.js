import React from 'react'
import { connect } from "react-redux"
import Scores from './Scores'
function Leaderboard(props) {

   const users = props.usersData

   return (


      <div id="leaderboard-view1">


         {users && users.map(user =>

             <Scores key={user.id} user={user} />

           
         )}

      </div>

   )

}



const mapStateToProps = ({ users }) => {

   const usersData = Object.values(users)
   usersData.sort((a, b) => {

      let AtotalQuestions = Object.keys(a.answers).length + a.questions.length
      let BtotalQuestions = Object.keys(b.answers).length + b.questions.length

      return BtotalQuestions - AtotalQuestions

   })

   // sorting is not considered mutation for state


   return {
      usersData,

   }
}

export default connect(mapStateToProps)(Leaderboard)