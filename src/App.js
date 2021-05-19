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
    let state = this.props.store;
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Nav friends={state.nav.friends}/>
          <div className="app-wrapper-content">
            <Route exact path="/" render={()=><Profile state = {state.profile} 
            dispatch={this.props.dispatch}/>} />
            <Route path="/profile" render={()=><Profile state={state.profile} 
            dispatch={this.props.dispatch}/>} />
            <Route path="/dialogs" render={()=><Dialogs state={state.dialogs} 
            dispatch={this.props.dispatch}/>} />
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
