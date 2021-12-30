import React from "react"
import ReactDOM from "react-dom"

/* === THEME-CONTEXT === */
// import { ThemeContextProvider } from "./context-api/theme-context/themeContext"
// import App from "./context-api/theme-context/App"

/* === USER-CONTEXT === */
// import { UserContextProvider } from './context-api/user-context/userContext'
// import App from '.context-api/user-context/App'

/* === USERNAME-CONTEXT === */
// import UsernameContext from './context-api/username-context/usernameContext'
// import App from './context-api/username-context/App'

/* === REACT-ROUTER === */
import App from "./react-router/App"
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  // <ThemeContextProvider>
  //     <App />
  // </ThemeContextProvider>
  
  // <UserContextProvider>
  //     <App />
  // </UserContextProvider>

  // <UsernameContext.Provider>
  //     <App />
  // </UsernameContext.Provider>

  <Router>
    <App />
  </Router>
, document.getElementById("root"))


