import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavBar.module.css';
import {Friends} from '../Sidebar/Friends';
import {SidebarPropsType} from './NavBarContainer';


export const NavBar = (props: SidebarPropsType) => {
    let friend = props.sidebar.map(f => <Friends id={f.id} name={f.name} avatar={f.avatar}/>)
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                </div>

            </nav>
            <div className={s.sidebar}>
                <h3>Friends</h3>
                <div>{friend}</div>
            </div>
        </div>
    );
};
