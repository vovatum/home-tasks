import React from 'react'
import styles from "./NavBar.module.css"
import {NavLink} from "react-router-dom"
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {

    state = {
        icon: styles.icon,
    }

    changeClassIcon = () => {
        this.setState({icon: styles.icon})
    }

    changeClassIconTuesday = () => {
        this.setState({icon: styles.iconTuesday})
    }

    render = () => {

        return (
            <div className={styles.wrapper}>
                <nav className={styles.nav}>
                    <NavLink to={"/monday"}
                             activeClassName={styles.activeLink}
                             onClick={this.changeClassIcon}>Понедельник</NavLink>
                    <NavLink to={'/tuesday'}
                             activeClassName={styles.activeLink}
                             onClick={this.changeClassIconTuesday}>Вторник</NavLink>
                </nav>
                <FontAwesomeIcon className={this.state.icon}
                                 icon={faBars}/>
            </div>
        )
    }
}

export default NavBar

