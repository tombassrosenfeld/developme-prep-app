import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Header from '../containers/Header';
import Errors from '../containers/Errors';
import TopicsNav from '../containers/TopicsNav';
import CohortNav from '../containers/instructor/CohortNav';
import Topic from '../containers/Topic';
import Cohort from '../containers/instructor/Cohort';
import Task from '../containers/Task';
import Assessment from '../containers/Assessment';
import Login from '../containers/Login';
import Welcome from '../containers/Welcome';
import StudentRecord from '../containers/instructor/StudentRecord';


import MenuToggle from '../components/MenuToggle';

class App extends Component {

  loading() {
    return (
      <i className="fa fa-spinner loading" aria-hidden="true"></i> // TODO: make this better
    )
  }

  loaded() {
    return (
      <div className="row">
          <Route path="/" render={ ({ match }) => {
            return this.props.userRole === 'student' ?
              <TopicsNav title="Topics" />
              :
              <CohortNav title="Cohorts" />
            }
          }/>        
          <Route exact path="/" render={ ({ match }) => (
            <Welcome userRole={this.props.userRole}/>
          )} />
          <Route path="/prep/topic/:id" render={ ({ match }) => (
            <Topic id={ match.params.id }/>
          )} />
          <Route exact path="/cohort/:id" render={ ({ match }) => (
            this.props.userRole === 'instructor' && this.props.cohortsLoaded ?
            <Cohort id={ match.params.id }/> 
            :
            <Welcome userRole="student"/>
          )} />
          <Route exact path="/cohort/:cohort/:student" render={ ({ match }) => (
            this.props.userRole === 'instructor' && this.props.cohortsLoaded ?
            <StudentRecord 
              cohortID={ match.params.cohort } 
              studentID={ match.params.student }
              userRole={this.props.userRole}
            /> 
            :
            this.props.userRole === 'instructor' ? this.loading() : <Welcome userRole="student"/>
          )} />
          <Route path="/prep/topic/:topic/task/:task" render={ ({ match }) => (
            <Task id={ match.params.task } topicID={ match.params.topic }/>
          )} />
          <Route path="/prep/topic/:topic/assessment/:assessment" render={ ({ match }) => (
            <Assessment id={ match.params.assessment } topicID={ match.params.topic }/>
          )} />
        
      </div>
    )
  }

  render() {
    return (
    <Router>
      <div>
        <div className="container-fluid">
          <Header />
          <Errors />
          <div className="app">
            { this.props.loggedIn ? null : <Login /> }
            { this.props.loggedIn ? this.props.isLoaded? this.loaded() : this.loading() : null }
          </div>
        </div>  
      </div>
    </Router>
    );
  }
}

export default App;