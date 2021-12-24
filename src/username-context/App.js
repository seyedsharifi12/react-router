import React from "react"

import Header from "./Header"
import UserContext from "./usernameContext"

function App() {
    return (
        <div>
            <Header />
            <main>
                <UserContext.Consumer>
                    {username => (
                        <p className="main">No new notifications, {username}! 🎉</p>
                    )}
                </UserContext.Consumer>
            </main>
        </div>
    )
}

export default App