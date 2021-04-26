import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';


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
