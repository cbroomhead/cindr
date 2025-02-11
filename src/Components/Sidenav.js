import { navData } from "../lib/navData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import styles from './sidenav.module.css';
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';


export default function Sidenav() {
  const [open, setopen] = useState(true)

  const toggleOpen = () => {
    setopen(!open)
  }


  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
    <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
    </button>
    <Divider />
    {navData.map(item =>{
        return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                  {item.icon}
                   <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
               </NavLink>
     })}
</div>
  )
}