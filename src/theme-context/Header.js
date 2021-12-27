import React from "react"
import { ThemeContextConsumer } from "./themeContext"
import PropTypes from "prop-types"

function Header (props) {    
    const capitalize = (string)=> string[0].toUpperCase()+ string.slice(1);
    return (
        <ThemeContextConsumer>
            {theme => (
                    <header className={`${props.theme}-theme`}>
                    <h2>{`${capitalize(props.theme)} Theme`}</h2>
                    </header>
                )
            }
        </ ThemeContextConsumer>
    )    
}

Header.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Header.defaultProps = {
    theme: "light"
}


export default Header
