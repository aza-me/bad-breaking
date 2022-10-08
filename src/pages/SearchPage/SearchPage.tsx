import React, { useState } from 'react'
import s from './SearchPage.module.scss'

const SearchPage: React.FC = () => {
    const [input, setInput] = useState('')
    
    const inputChange = (text: string) => {
        setInput(text)
        console.log(input);

    }
    return (
        <div className={s.folder}>
            <input value={input} onChange={(e) => inputChange(e.target.value)} type="text" name="" id="" />
        </div>
    )
}

export default SearchPage