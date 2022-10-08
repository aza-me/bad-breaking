import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { GetAllDeaths } from 'store/modules/deaths'
import s from './CharactersPage.module.scss'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const CharactersPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const { deaths } = useAppSelector((state) => state.deaths)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        width: '100%',
        color: theme.palette.text.secondary,
    }));

    useEffect(() => {
        dispatch(GetAllDeaths())
    }, [])

    useEffect(() => {
        console.log(deaths);
    }, [deaths]);
    return (
        <div className={s.folder}>
            {deaths.map(e => <div key={e.death_id} className={s.item}>  <NavLink to={`/characters/${e.death.split(' ').splice(0,1).join('+')}`} ><Item> {e.death}</Item> </NavLink> </div>)}
        </div>
    )
}

export default CharactersPage