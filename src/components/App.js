import React, { Component } from 'react'
import '../App.css'
import Login from './Login';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav'
import Dashboard from './dashboard/Dashboard'
import Leaderboard from '../components/leaderboard/Leaderboard'
import NewQuestion from '../components/newquestion/NewQuestion'
import QuestionsDetails from './dashboard/QuestionDetails'
import NotMatched from './NotMatched'
import { Switch, Route } from 'react-router-dom';


class App extends Component {

  componentDidMount() {

    const { initialData } = this.props

    initialData()
  }


  render() {
    const loggedUser = this.props.loggedUser

    return (
      <div className='App'>  
    
        {!loggedUser ? (<Login />)

          :
          (
            <div>
              <Nav />
              
              <Switch>

                <Route exact path='/'  render={() => <Dashboard />} />
                <Route exact path='/leaderboard'  render={() => <Leaderboard />} />
                <Route exact path='/add'  render={() => <NewQuestion />} />
                <Route exact path='/questions/:question_id'  component={QuestionsDetails} />
                <Route component={NotMatched}/>



              </Switch>

            </div>

          )
        }


      </div>
    );
  }
}


const mapStateToProps = ({ loggedUser }) => {


  return {
    loggedUser
  }

}


const mapDispatchToProps = (dispatch) => {

  return {
    initialData: () => dispatch(handleInitialData())
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
