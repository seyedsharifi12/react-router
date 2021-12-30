import React from "react"
import './styles.css'
import Header from "./Header"
import Button from "./Button"
import { ThemeContextConsumer } from "./themeContext"

function App() {
    return (
        <div>
            <Header />
            <ThemeContextConsumer>
                {value => (
                    <Button theme={value.theme}/>
                )}   
            </ThemeContextConsumer>
            
        </div>
    )
}

export default App