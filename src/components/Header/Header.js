import React, { Component } from 'react';
import s from'./Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={s.header}>
                <div><img src="/img/snLogo.png" /></div>
                <div><p className={s.name}>SoN</p></div>               
            </header>
        )
    }
}
export default Header;