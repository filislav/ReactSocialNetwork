import React,{Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <div className='navitem'><a className='navRef'>Profile</a></div>
                <div className="navitem"><a className='navRef'>Messages</a></div>
                <div className="navitem"><a className='navRef'>News</a></div>
                <div className="navitem"><a className='navRef'>Music</a></div>
            </nav>
        )
    }
}
export default Nav;