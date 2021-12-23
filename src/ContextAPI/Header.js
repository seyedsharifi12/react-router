import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Header extends Component {
    static contextType = ThemeContext
    render() {
        const theme = this.context
        console.log(theme)
        const firsLetterCapitalTheme = theme[0].toUpperCase()+ theme.slice(1);
        return (
         
            <header className={`${theme}-theme`}>
                <h2>{`${firsLetterCapitalTheme} Theme`}</h2>
            </header>
        )    
    }
}
// Header.contextType = ThemeContext;

export default Header
