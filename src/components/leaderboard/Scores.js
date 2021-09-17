import React, { Fragment } from "react"
import { Paper } from '@material-ui/core'

export default function Scores(props) {

    const {avatarURL,name,questions,answers}= props.user
    return (
        <Fragment>
         <Paper id="leaderboard-view2" >
            <div className='leaderboard-img'>
                <img src={`/${avatarURL}`} alt={`${name} avatar`} style={{ width: 150 }} />
            </div>

            <div className='leaderboard-questions'>

                <p>{name}</p>

                <p>Number of questions asked: <span style={{ color: '#ff5d8f' }}>{questions.length}</span> </p>

                <p>Number of questions answered: <span style={{ color: '#ff5d8f' }}>{Object.keys(answers).length}</span> </p>
            </div>

            <div className='leaderboard-score'>
                <span>  Score </span>
                <span>{questions.length + Object.keys(answers).length}</span>
            </div>
            </Paper>

        </Fragment>
    )
}