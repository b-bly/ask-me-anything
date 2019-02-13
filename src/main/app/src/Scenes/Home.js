import React, {Component} from 'react'

// Components
import List from './QAndA/QuestionList/List'

class Home extends Component {
  
  render() {
    return (
      <div className="App">
        <List />     
      </div>
    );
  }
}

export default Home