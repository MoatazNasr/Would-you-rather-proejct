import React, { useState } from "react";
import { connect } from "react-redux";
import '../App.css'
import {
    Avatar,
    Select,
    MenuItem,
}
    from '@material-ui/core'

import { logIN } from "../actions/logUser";    

function Login(props) {

    const [selected, setSelectedValue] = useState('');
    const user = selected;
    const {logUser}= props

    const SelectedValue = (e) => {

        const value = e.target.value

        setSelectedValue(value)

    }

    return (

        <div>

            <div className="loginIn">
                <h1 style={{color:'black' }} > <span className="login-letter">W</span>ould You <span className="login-letter">R</span>ather</h1>
                <form onSubmit={(e)=> {e.preventDefault() ; logUser(user) }}>

                    <Select value={selected}  onChange={SelectedValue} style={{ width: 500  }}  color="secondary"  className="align-Items" >
                        <MenuItem value="sarahedo" className="inside">
                            <Avatar src="/sarah.svg" className='avatar-Class'></Avatar>
                            <p>Sarah Edo</p>

                        </MenuItem>
                        <MenuItem value="johndoe" className="inside">
                            <Avatar src="/john.svg" className='avatar-Class'></Avatar>
                            <p>John Doe</p>
                        </MenuItem>
                        <MenuItem value="tylermcginnis" className="inside">
                            <Avatar src="/tyler.svg" className='avatar-Class'></Avatar>
                            <p >Tyler McGinnis</p>
                        </MenuItem>

                    </Select>
                    <div> 
                    <button type="submit" className='btn'> Log In</button>
                    </div>
                </form>
            </div>

        </div>
    )

}


const mapDispatchToProps=(dispatch)=>{

    return {
        logUser(user){
            dispatch(logIN(user))
        },
    }
}

export default connect(null,mapDispatchToProps)(Login)