import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter,Route } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';



class App extends Component { 
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Preloader />
          <Header />
          <NavContainer />
          <div className="app-wrapper-content">
            <Route exact path="/" render={()=><ProfileContainer />}/>s
            <Route path="/profile" render={()=><ProfileContainer />} />
            <Route path="/dialogs" render={()=><DialogsContainer />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" render={()=><UsersContainer />} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
