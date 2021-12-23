import React from "react"
import './styles.css'
import Header from "./Header"
import UsernameContext from "./UsernameContext"
/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 * https://reactjs.org/docs/context.html
 */

class App extends React.Component {
    static contextType = UsernameContext
    render() {
        const username = this.context
    return (
        <div>
            <Header />
            <main>
                

                <p className="main">No new notifications, {username}! 🎉</p>
                

            </main>
        </div>
    )
}
}
export default App