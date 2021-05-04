import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter,Route } from 'react-router-dom';



class App extends Component { 
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Nav friends={this.props.state.nav.friends}/>
          <div className="app-wrapper-content">
            <Route path="/profile" render={()=><Profile state={this.props.state.profile}/>} />
            <Route path="/dialogs" render={()=><Dialogs state={this.props.state.dialogs} />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
