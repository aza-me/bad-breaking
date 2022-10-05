import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { GetDeathsByName } from 'store/modules/deaths'

const CurrentCharacter: React.FC = () => {
    const dispatch = useAppDispatch()
    const { name } = useParams<{ name: string }>()
    const CurrentCharacter = useAppSelector((state) => state.deaths.currentDeath)

    useEffect(() => {
        if (!name) return;
        dispatch(GetDeathsByName(name));
    }, []);
    useEffect(() => {
        console.log(CurrentCharacter);
    }, [CurrentCharacter]);
    return (
        <div>{CurrentCharacter?.last_words}</div>
    )
}

export default CurrentCharacter