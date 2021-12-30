import React from "react"
import ReactDOM from "react-dom"
import App from "./react-router/App"
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById("root"))


/* === USER-CONTEXT === */

// import { UserContextProvider } from './user-context/userContext'
// import App from './user-context/App'

// ReactDOM.render(
//   <UserContextProvider>
//     <App />
//   </UserContextProvider>
//   , document.getElementById("root")
// )

/* === THEME-CONTEXT === */

// import { ThemeContextProvider } from "./theme-context/themeContext"
// import App from "./theme-context/App"

// ReactDOM.render(
//     <ThemeContextProvider value={"light"}>
//       <App />
//     </ThemeContextProvider>
//     , document.getElementById("root")
// )


/* === USERNAME-CONTEXT === */

// import UsernameContext from './username-context/usernameContext'
// import App from './username-context/App'

// ReactDOM.render(
//   <UsernameContext.Provider value={'Smithers'}>
//     <App />
//   </UsernameContext.Provider>
//   , document.getElementById("root")
// )

