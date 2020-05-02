import React from 'react'
import styles from "./NavBar.module.css"
import {NavLink} from "react-router-dom"

const NavBar = (props) => {

    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to={"/monday"}
                         activeClassName={styles.activeLink}>Понедельник
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/tuesday'}
                         activeClassName={styles.activeLink}>Вторник
                </NavLink>
            </div>
            {/*<i className="fas fa-bars"></i>*/}
        </nav>
    )
}

export default NavBar

