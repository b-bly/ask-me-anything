import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom'
// Request methods
import { getCurrentUser } from './util/APIUtils'

// constants
import { ACCESS_TOKEN, API_BASE_URL } from './constants'

// Components
import Home from './Scenes/Home'
import Login from './Scenes/User/Login'
import Register from './Scenes/User/Register'
import CreateQuestion from './Scenes/QAndA/CreateQuestion/CreateQuestion'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '',
      isAuthenticated: false,
      isLoading: false,
    }
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
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

  componentDidMount() {
    this.loadCurrentUser();
    this.getAllQuestions();

  }

  handleLogin = () => {
    this.loadCurrentUser();
    this.props.history.push('/')
  }

  handleRegister = (registerObj) => {
    console.log(registerObj)

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

  getAllQuestions = async () => {

    // post to api
    let options = {
      url: API_BASE_URL + "/question",
      method: 'GET'
    }

    const headers = new Headers({
      'Content-Type': 'application/json',
    })

    // add token
    if (localStorage.getItem(ACCESS_TOKEN)) {
      headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    try {
      const response = await fetch(options.url, options)
        .then(response =>
          response.json().then(json => {
            return json;
          })
        );
        console.log('questions: ');
        
        console.log(response);
        
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          React Hello Boot
        </header>
        {this.state.currentUser &&
          <div>Current user: {this.state.currentUser.name}</div>
        }
        <a href="/client/login">Login</a>
        <a href="/register">Register</a>

        <button
          onClick={this.handleLogout.bind(this)}
        >Logout</button>


        {/* <CreateQuestion /> */}
        <Switch>
          <Route exact path="/"
            render={(props) => <Home />}>
          </Route>

          <Route path="/client/login"
            render={(props) => <Login onLogin={this.handleLogin.bind(this)} {...props} />}>
          </Route>
          <Route path="/register"
            render={(props) => <Register onRegister={this.handleRegister.bind(this)} />}>
          </Route>
          <Route
            path="/new-question"
            render={() => <CreateQuestion />}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
