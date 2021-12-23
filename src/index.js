import React from "react"
import ReactDOM from "react-dom"
import ThemeContext from "./ContextAPI/themeContext.js"
import App from "./ContextAPI/App"



ReactDOM.render(
    <ThemeContext.Provider value={"light"}>
      <App />
    </ThemeContext.Provider>
    , document.getElementById("root"))
