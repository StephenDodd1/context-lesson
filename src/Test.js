import React, { useContext } from 'react'
import {ThemeContext} from './context'
const Test = (props) => {
    const theme= useContext(ThemeContext)
    console.log('theme is',theme)
    return (
        <div>   
            <button 
                className={theme.themes.dark ? 'bg-black': ''}
                onClick={props.setLetter}
                value='a'>a</button>
            <button 
                className={theme.themes.dark ? 'bg-black': ''}
                onClick={props.setLetter}
                value='b'>b</button>
            <div className={theme.themes.dark ? 'white': ''}>{props.letter}</div>
        </div>
    )
}

export default Test