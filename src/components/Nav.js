import React,{Component} from 'react';
import classes from'./Nav.module.css';

class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <div className={classes.navitem}><a className={classes.navRef}>Profile</a></div>
                <div className={`${classes.navitem} ${classes.active}`}><a className={classes.navRef}>Messages</a></div>
                <div className={classes.navitem}><a className={classes.navRef}>News</a></div>
                <div className={classes.navitem}><a className={classes.navRef}>Music</a></div>
            </nav>
        )
    }
}
export default Nav;