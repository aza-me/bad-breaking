import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
import icon from '../../assets/image/logo.png'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Icon } from '@mui/material';
const Header: React.FC = () => {
  return (
    <div className={s.header}>


      <div className={s.logo}>
        <NavLink to={'/'}>
          <img src={icon} alt="" />
        </NavLink>
      </div>
      <div className={s.items}>
        <NavLink to={'/characters'}>
          All Characters
        </NavLink>

      </div>
      <div className={s.items}>
        <NavLink to={'/search'}>
          Lets search on site
        </NavLink>

      </div>
      <div className={s.items}></div>




    </div>
  )
}

export default Header