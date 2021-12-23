import React from "react"
import ReactDOM from "react-dom"
import UsernameContext from "./ContextPractice-1/UsernameContext.js"
import App from "./ContextPractice-1/App"



ReactDOM.render(
    <UsernameContext.Provider value={"Michael"}>
      <App />
    </UsernameContext.Provider>
    , document.getElementById("root"))
