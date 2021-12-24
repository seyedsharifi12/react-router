import React, {Component} from "react"
import ThemeContext from "./themeContext"

function Button () {
   
        const theme = "light"
        return (
            <button className={`${theme}-theme`}>Switch Theme</button>
        )    
    }


export default Button


























