import React from 'react'
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function Answered(props) {

    const userID = props.userID

    const {
        name,
        optionOneText,
        optionTwoText,
        optionOneVotes,
        optionTwoVotes,
        avatar } = props.question


    let opt1perc = (optionOneVotes.length * 33.3)
    let opt2perc = (optionTwoVotes.length * 33.3)

    return (
        <div style={{ margin: 40 }}>

            <Card >
            <Link to={ {pathname:'/', state: true }} style={{float:'left'}}><ArrowBackIcon  style={{color:'#ff5d8f'}}>  </ArrowBackIcon> </Link>
            

                <section id='card'>

                    <div>
                        <Typography
                            variant='subtitle2'
                            style={{ margin: 20 }}

                        > {`Asked By ${name}`} </Typography>

                        <CardMedia>
                            <img src={`/${avatar}`} alt={`${name} avatar`} style={{ width: 150 }} />

                        </CardMedia>

                    </div>
                    <div>
                        <CardContent>

                            <Typography variant='h5'>
                                Results
                            </Typography>
                            <div id='div-1' className='option-group'>
                                <Typography variant='body1' style={{ margin: 20 }}>
                                    {optionOneText}
                                </Typography>
                                {optionOneVotes.includes(userID) && <span className='marked-answer'>M</span>}
                                <div className='progressbar' style={{ height: 20, width: `${opt1perc}%` }} > </div>
                                <div> {optionOneVotes.length} out of 3 votes</div>

                            </div>
                            <div id='div-2' className='option-group'>
                                {optionTwoVotes.includes(userID) && <span className='marked-answer'>M</span>}
                                <Typography variant='body1' style={{ margin: 20 }}>
                                    {optionTwoText}
                                </Typography>
                                <div className='progressbar' style={{ height: 20, width: `${opt2perc}%` }}> </div>
                                <div> {optionTwoVotes.length} out of 3 votes</div>
                            </div>

                        </CardContent>
                    </div>

                </section>
            </Card>

        </div>
    )
}