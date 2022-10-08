import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { GetDeathsByName } from 'store/modules/deaths'
import s from './CurrentCharacter.module.scss'

const CurrentCharacter: React.FC = () => {
    const dispatch = useAppDispatch()
    const { name } = useParams<{ name: string }>()
    const CurrentCharacter = useAppSelector((state) => state.deaths.currentDeath)
    useEffect(() => {
        if (!name) return;

        dispatch(GetDeathsByName(name));
    }, []);
    useEffect(() => {
        console.log("api:", CurrentCharacter)
        console.log("name:", name);
    }, [CurrentCharacter]);
    return (
        <div className={s.folder}>

            <div className={s.item}>{CurrentCharacter?.last_words}{CurrentCharacter?.episode} </div>
        </div>
    )
}

export default CurrentCharacter