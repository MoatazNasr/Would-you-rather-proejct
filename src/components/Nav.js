import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { logOUT } from "../actions/logUser";
import {  useHistory } from 'react-router'

import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

function Nav(props) {


    const { name, avatarURL, logOUT } = props
    const history = useHistory()
    const handleLogout=()=>{

        logOUT()
        history.push('/')
    }
    return (

        <div className="header">

            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active' >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="userData">

                <ul>
                    <li>
                        <p> Welcome {name} </p>

                    </li>
                    <li>
                        <img style={{ width: 60 }} alt={`${name} avatar`} src={`/${avatarURL}`} />
                    </li>
                    <li>
                        <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'white' }}>
                            <span style={{ display: 'flex', alignItems: 'center' }}> <ExitToAppOutlinedIcon 
                            style={{ color: '#ff5d8f', marginRight: 10 }}></ExitToAppOutlinedIcon>
                                Logout
                            </span>
                        </button>
                    </li>
                </ul>


            </div>

        </div>

    )





}


const mapStateToProps = ({ loggedUser, users }) => {

    const { name, avatarURL } = users[loggedUser]



    return {
        name,
        avatarURL

    }

}


const mapDispatchToProps = (dispatch) => {

    return {
        logOUT: () => { dispatch(logOUT('')) }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)