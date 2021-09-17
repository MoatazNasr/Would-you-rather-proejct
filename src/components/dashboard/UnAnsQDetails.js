import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Radio, Typography, Button, RadioGroup, FormControl, FormControlLabel } from "@material-ui/core";
import '../../App.css'
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../../actions/shared'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function UnAnswered(props) {

    const [selectRadio1, setSelectRadio1] = useState(false)
    const [selectRadio2, setSelectRadio2] = useState(false)
    const [radioValue, setRadioValue] = useState(null)
    const { id,
        name,
        optionOneText,
        optionTwoText,
        avatar } = props.question

    const { userID } = props
    const { answerQuestion } = props
    const history = useHistory()
    const handleOnChange1 = (e) => {

        const value = e.target.value
        setSelectRadio1(true)
        setSelectRadio2(false)
        setRadioValue(value)
    }
    const handleOnChange2 = (e) => {

        const value = e.target.value
        setSelectRadio2(true)
        setSelectRadio1(false)
        setRadioValue(value)


    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        answerQuestion(userID, id, radioValue)
        history.push('/')
    }

    return (


        <div style={{ margin: 40 }}>

            <Card >
                <Link to='/' style={{ float: 'left' }}><ArrowBackIcon style={{ color: '#ff5d8f' }}></ArrowBackIcon> </Link>

                <section id='card' >



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

                            <Typography variant='h4' style={{ margin: 20 }}>
                                Would You Rather...
                            </Typography>


                            <form onSubmit={handleOnSubmit} className="radio-form" style={{ color: 'black' }}>

                                <RadioGroup >
                                    <FormControlLabel onChange={handleOnChange1} checked={selectRadio1} value='optionOne' style={{ color: 'black' }}
                                    control={<Radio color='default' />} label={optionOneText} />

                                    <FormControlLabel onChange={handleOnChange2} checked={selectRadio2} value='optionTwo' style={{ color: 'black' }} 
                                    control={<Radio color='default' />} label={optionTwoText} />

                                </RadioGroup>

                                <Button type="submit" disabled={radioValue === null ? true : false} style={{ margin: 10 , width:200 }} id='radio-btn1'>
                                    Submit</Button>

                            </form>

                        </CardContent>
                    </div>

                </section>
            </Card>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {


    return {
        answerQuestion: (loggedUser, qid, answer) => { dispatch(handleAnswerQuestion(loggedUser, qid, answer)) }
    }

}
export default connect(null, mapDispatchToProps)(UnAnswered)