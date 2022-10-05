import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { GetAllDeaths } from 'store/modules/deaths'

const CharactersPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const { deaths } = useAppSelector((state) => state.deaths)
    useEffect(() => {
        dispatch(GetAllDeaths())
    }, [])

    useEffect(() => {
        console.log(deaths);
    }, [deaths]);


    return (
        <div> {deaths.map(e => <div key={e.death_id}>  <NavLink to={`/characters/${e.death_id}`} > {e.death} </NavLink> </div>)}</div>
    )
}

export default CharactersPage