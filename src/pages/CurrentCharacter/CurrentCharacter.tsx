import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { GetDeathsById } from 'store/modules/deaths'

const CurrentCharacter: React.FC = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams<{ id?: string }>()
    const CurrentCharacter = useAppSelector((state) => state.deaths.currentDeath)
    // const dispatch = useAppDispatch();
    // const { id } = useParams<{ id?: string }>();
    // const currentEpisode = useAppSelector((state) => state);

    useEffect(() => {
        if (!id) return;
        dispatch(GetDeathsById(+id));
    }, []);
    useEffect(() => {
        console.log(CurrentCharacter);
    }, [CurrentCharacter]);
    return (
        <div>{CurrentCharacter?.last_words}</div>
    )
}

export default CurrentCharacter