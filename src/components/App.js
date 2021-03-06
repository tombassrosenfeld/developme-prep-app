import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Header from '../containers/Header';
import Footer from '../components/Footer';
import Register from '../components/Register';
import Errors from '../containers/Errors';
import Messages from '../containers/Messages';
import TopicsNav from '../containers/TopicsNav';
import CohortNav from '../containers/instructor/CohortNav';
import Topic from '../containers/Topic';
import Cohort from '../containers/instructor/Cohort';
import Task from '../containers/Task';
import Assessment from '../containers/Assessment';
import Login from '../containers/Login';
import Welcome from '../containers/Welcome';
import StudentRecord from '../containers/instructor/StudentRecord';
import Marking from '../containers/instructor/Marking';
import Feedback from '../containers/Feedback';


class App extends Component {

  loading() {
    return (
      <i className="fa fa-spinner loading" aria-hidden="true"></i> // TODO: make this better
    )
  }

  loaded() {
    return this.props.userRole ? (
      <div className="row">
          <Route path="/" render={ ({ match }) => {
            this.props.checkDataFreshness(this.props.userId)
            return null;
          }}/>
          <Route path="/" render={ ({ match }) => {
            return this.props.userRole === 'instructor' ?
              <CohortNav title="Cohorts" />
              : null }
            }
          />     
          <Route path="/" render={ ({ match }) => {
            return this.props.userRole === 'student' ?
              <TopicsNav title="Topics" />
              : null }
            }
          />        
          <Route exact path="/" render={ ({ match }) => (
            <div>
            <Welcome userRole={this.props.userRole}/>
            </div>
          )} />
          <Route path="/marking/" render={ ({ match }) => (
            this.props.userRole === 'instructor' && this.props.cohortsLoaded ? <Marking /> : null
          )} />   
          <Route path="/feedback/" render={ ({ match }) => (
            this.props.userRole === 'student' ? <Feedback /> : null
          )} />                    
          <Route path="/prep/topic/:id" render={ ({ match }) => (
            <Topic id={ match.params.id }/>
          )} />
          <Route path="/register" component={Register} />
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
    ) : this.loading();
  }

  render() {
    return (
    <Router>
      <div>
        <div className="container-fluid">
          <Header />
          <div className="app">
            {
              this.props.loading ?
                this.loading() :
              !this.props.loggedIn ? 
                <Login /> :
              this.props.isLoaded ? 
                this.loaded() :
                this.loading() 
            }
          </div>
        </div>  
        <Errors />
        <Messages />
        {this.props.loggedIn ? <Footer /> : null }
      </div>
    </Router>
    );
  }
}

export default App;