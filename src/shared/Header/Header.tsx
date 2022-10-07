import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={s.header}>



      <NavLink to={'/characters'}> All Characters</NavLink>
       



    </div>
  )
}

export default Header