import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom'
// Request methods
import { getCurrentUser } from './util/APIUtils'
// constants
import { ACCESS_TOKEN } from './constants'

// Components
import Home from './Scenes/Home'
import Login from './Scenes/User/Login'
import Register from './Scenes/User/Register'
import Nav from './Scenes/Nav/NavBar'
import FormPropsContainer from './Scenes/QAndA/Form/FormPropsContainer'
import FormContainer from './Scenes/QAndA/Form/FormContainer'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit, faReply } from '@fortawesome/free-solid-svg-icons'

// Functions
import { createQuestion, editQuestion } from './util/APIUtils'

library.add(faTrash, faEdit, faReply)

const getFormPropsContainerDefaultProps = () => {
  return {
    fieldName: 'questionText',
    payload: {
      defaultValue: '',
    },
    labelText: 'New question:',
    placeholder: 'Type your question',
    mode: 'add',
    submit: createQuestion
  }
}

const getEditQuestionDefaultProps = () => {
  return {
    fieldName: 'questionText',
    labelText: 'Edit your question',
    placeholder: 'Type your question',
    mode: 'edit',
    submit: editQuestion,
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false,
    }
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    console.log('loading current user');

    this.setState({
      isLoading: true
    });
    getCurrentUser()
      .then(response => {
        console.log(response)
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
      }).catch(error => {
        this.setState({
          isLoading: false
        });
      });
  }

  handleLogin = () => {
    this.loadCurrentUser();
    this.props.history.push('/')
  }

  handleRegister = (registerObj) => {
    this.props.history.push('/client/login')
  }


  handleLogout(redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);
    console.log('click');

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
  }

  render() {
    return (
      <div className="App">
        <Nav loadCurrentUser={this.loadCurrentUser.bind(this)}
          handleLogout={this.handleLogout.bind(this)}
          currentUser={this.state.currentUser} />

        {this.state.currentUser &&
          <div>Current user: {this.state.currentUser.name}</div>
        }

        <Switch>
          <Route exact path="/"
            render={() => <Home />}>
          </Route>
          <Route path="/client/login"
            render={(props) => <Login onLogin={this.handleLogin.bind(this)} {...props} />}>
          </Route>
          <Route path="/register"
            render={() => <Register onRegister={this.handleRegister.bind(this)} />}>
          </Route>
          <Route
            path="/new-question"
            render={() => <FormContainer
              {...getFormPropsContainerDefaultProps()}
            />}>
          </Route>
          {/* // fieldName, payload.defaultValue, payload.id, labelText, placeholder */}

          <Route
            path="/edit-question"
            render={() => <FormPropsContainer
              {...getEditQuestionDefaultProps()}
            />}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
