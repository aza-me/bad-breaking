import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { GetAllDeaths } from 'store/modules/deaths'
import { getAllEpisodes } from 'store/modules/episodes'
import s from './SearchPage.module.scss'

const SearchPage: React.FC = () => {
    const [input, setInput] = useState('')
    const dispatch = useAppDispatch()
    const { deaths } = useAppSelector(state => state.deaths)
    const { episodes } = useAppSelector(state => state.episodes)
    const arr = [deaths, episodes]




    const inputChange = (text: string) => {
        setInput(text)
        console.log(input);
    }
    useEffect(() => {
        dispatch(getAllEpisodes())
        dispatch(GetAllDeaths())
        console.log(arr);

    },[])
    return (
        <div className={s.folder}>
            <input value={input} onChange={(e) => inputChange(e.target.value)} type="text" name="" id="" />
        </div>
    )
}

export default SearchPage