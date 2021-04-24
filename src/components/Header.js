import React, { Component } from 'react';
import s from'./Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={s.header}>
                <img src="https://api.freelogodesign.org/assets/thumb/logo/22073155_400.png" />
            </header>
        )
    }
}
export default Header;