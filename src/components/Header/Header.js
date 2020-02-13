import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classes from './Header.module.scss';

class Header extends Component {
    render() {
        const { pages, score, activePage } = this.props;
        return (
            <header className={classes.Header}>
                <section className={classes.LogoSection}>
                    <Logo />
                    <span>Score: {score}</span>
                </section>
                <ul className={classes.PagesList}>
                    {pages.map((page, i) => (
                        <li key={`${page}${i + Math.random()}`} className={i === activePage ? classes.ActivePage : ''}>{page}</li>
                    ))}
                </ul>
            </header>
        );
    };
};

export default Header;