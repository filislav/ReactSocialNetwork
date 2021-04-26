import React,{Component} from 'react';
import classes from'./Nav.module.css';

class Nav extends Component {
    render() {
        return (
            <nav className={classes.nav}>
                {/* /profile /dialogs -'это маппинги' */}
                <div className={classes.navitem}><a href="/profile" className={classes.navRef}>Profile</a></div> 
                <div className={`${classes.navitem} ${classes.active}`}><a href="/dialogs" className={classes.navRef}>Messages</a></div>
                <div className={classes.navitem}><a href="/news" className={classes.navRef}>News</a></div>
                <div className={classes.navitem}><a href="/music" className={classes.navRef}>Music</a></div>
                <div className={classes.navitem}><a href="/settings" className={classes.navRef}>Settings</a></div>
            </nav>
        )
    }
}
export default Nav;