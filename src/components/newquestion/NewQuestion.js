import { FormControl, FormLabel, TextField, Typography, Button, Paper } from '@material-ui/core'
import React from 'react'
import { connect } from "react-redux"
import { useState } from 'react'
import { handleSaveQuestion } from '../../actions/shared'
import { useHistory } from 'react-router'
function NewQuestion(props) {

    const [option1Value, setoption1Value] = useState('')
    const [option2Value, setoption2Value] = useState('')
    const { handleAddQuestion } = props
    const history = useHistory();
    const handleOption1Value = (e) => {
        const value = e.target.value
        setoption1Value(value)
    }
    const handleOption2Value = (e) => {
        const value = e.target.value
        setoption2Value(value)

    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>

            <form onSubmit={(e) => {
                e.preventDefault();
                handleAddQuestion(props.loggedUser, option1Value, option2Value); history.push('/')
            }} style={{ marginTop: 50 }} >

                <Paper style={{ width: 500 ,display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}  >

                    <FormLabel>

                        <Typography variant='h4' style={{ color: '#282c34' }}> Would You Rather</Typography>


                    </FormLabel>

                    <TextField
                        type='text'
                        color='secondary'
                        label='First Option'
                        style={{ marginTop: 20, borderBottom: '3  solid black' }}
                        value={option1Value}
                        onChange={handleOption1Value}

                    />
                    <div></div>
                    <TextField
                        type='text'
                        color='secondary'
                        label='Second Option'
                        style={{ margin: 50 }}
                        value={option2Value}
                        onChange={handleOption2Value}  />

                    <Button type='submit'style={{width:500}}
                        id='radio-btn2' disabled={(option1Value && option2Value) !== '' ? false : true} >
                        Submit
                    </Button>
                </Paper>

            </form>
        </div>
    )

}



const mapStateToProps = ({ loggedUser }) => {

    return {
        loggedUser,
    }

}


const mapDispatchToProps = (dispatch) => {


    return {
        handleAddQuestion: (loggedUser, optionOne, optionTwo) => dispatch(handleSaveQuestion(loggedUser, optionOne, optionTwo))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)