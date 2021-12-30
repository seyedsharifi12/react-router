import React, { useEffect } from "react"
import { ThemeContextConsumer } from "./themeContext"
import PropTypes from "prop-types"

function Header (props) {    
    const capitalize = (string)=> string[0].toUpperCase()+ string.slice(1);
    
    useEffect(() => {
        console.log("rendered")
    }, [])

    return (
        <ThemeContextConsumer>
            {context => (
                    <header className={`${context.theme}-theme`}>
                    <h2>{`${capitalize(context.theme)} Theme`}</h2>
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
