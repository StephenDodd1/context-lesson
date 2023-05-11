import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from './context'
const Test2 = (props) => {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <label className={theme.themes.dark ? 'white': ''}>Button a clicked!</label>
            <input type='radio' checked={props.radioClicked.current}/>
        </div>

    )
}

export default Test2