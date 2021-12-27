import React from "react"
import ReactDOM from "react-dom"

/* === THEME-CONTEXT === */

import { ThemeContextProvider } from "./theme-context/themeContext"
import App from "./theme-context/App"

ReactDOM.render(
    <ThemeContextProvider value={"light"}>
      <App />
    </ThemeContextProvider>
    , document.getElementById("root")
)


/* === USERNAME-CONTEXT === */

// import UsernameContext from './username-context/usernameContext'
// import App from './username-context/App'

// ReactDOM.render(
//   <UsernameContext.Provider value={'Smithers'}>
//     <App />
//   </UsernameContext.Provider>
//   , document.getElementById("root")
// )
