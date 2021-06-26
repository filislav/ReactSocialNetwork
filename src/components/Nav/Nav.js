import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Nav.module.css';
import Friends from './Friends/Friends';

class Nav extends Component {
    render() {
        return (
            <nav className={s.nav}>
                {/* /profile /dialogs -'это маппинги' */}
                <div className={s.navitem}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div> 
                <div className={s.navitem}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.navitem}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
                <div className={s.navitem}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
                <div className={s.navitem}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
                <div className={s.navitem}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></div>
                <Friends friends={this.props.friends}/>
            </nav>
        )
    }
}
export default Nav;