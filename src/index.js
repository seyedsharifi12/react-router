import React from "react"
import ReactDOM from "react-dom"
import ThemeContext from "./ContextPractice 1/themeContext"
import App from "./ContextAPI/App"



ReactDOM.render(
    <ThemeContext.Provider value={"light"}>
      <App />
    </ThemeContext.Provider>
    , document.getElementById("root"))
