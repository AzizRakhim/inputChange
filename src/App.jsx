import { Component } from 'react';
import './App.css';
import InputUser from './components/inputUser/inputUser';
import OutputUser from './components/outputUser/outputUser';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : "Aziz"
    }
  }

  inputChangeHandler = (event) => {
    this.setState({
      username : event.target.value
    })
  }

  render() {
    return (
      <>
        <InputUser onchange={this.inputChangeHandler} />
        <OutputUser username={this.state.username} />
      </>
    );
  }
}

export default App;
