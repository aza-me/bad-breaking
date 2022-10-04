import React, { useEffect } from 'react'
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
        <div> {deaths.map(e => <div key={e.id}>{e.death} </div>)}</div>
    )
}

export default CharactersPage