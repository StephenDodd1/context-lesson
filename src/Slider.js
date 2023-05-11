import React, { useContext} from "react";
import {ThemeContext} from './context'

const Slider = ({darkTheme}) => {
    let theme = useContext(ThemeContext)
    
    return (
        <div id="slider-container">
            <div id="slider-box" onClick={()=>{theme.themes.dark?theme.dispatch('light'):theme.dispatch('dark')}}>
                <div
                    id="slider-light"
                    className={!theme.themes.dark ? "hidden" : "bg-white"}
                ></div>
                <div
                    id="slider-dark"
                    className={theme.themes.dark ? "hidden" : "bg-gray"}
                ></div>
            </div>
        </div>
    );
};

export default Slider;
