import React from "react"
import ReactDOM from "react-dom"

/* === THEME-CONTEXT === */

import ThemeContext from "./theme-context/themeContext"
import App from "./theme-context/App"

ReactDOM.render(
    <ThemeContext.Provider value={"light"}>
      <App />
    </ThemeContext.Provider>
    , document.getElementById("root")
)


/* === USERNAME-CONTEXT === */

// import UsernameContext from './username-context/usernameContext'
// import App from './username-context/App'

// ReactDOM.render(
//   <UsernameContext.Provider value={"John Smith"}>
//     <App />
//   </UsernameContext.Provider>
//   , document.getElementById("root")
// )
