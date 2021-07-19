import React, { Component } from 'react';
import s from'./Header.module.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className={s.header}>
                <div><img src="/img/snLogo.png" /></div>
                <div><p className={s.name}>SoN</p></div>
                <div className={s.loginBlock}>
                    {this.props.isAuth?<p className={s.loginPara}>{this.props.login}</p> : <NavLink to='/login'>Login</NavLink>}
                </div>               
            </header>
        )
    }
}
export default Header;