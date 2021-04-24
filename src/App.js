import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';


class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Header /> 
        <Nav />
        <Profile />
      </div>
    )
  }
}
export default App;
