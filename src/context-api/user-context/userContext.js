import React,{Component} from "react"

const { Provider, Consumer } = React.createContext()

class UserContextProvider extends Component {
    // state
    state = {
        username: "Hello"
    }

    // methods 
    updateUsername = (username) => {
        this.setState({
            username
        })
    }

    render() {
        return (
            <Provider value={{
                username: this.state.username,
                updateUsername: this.updateUsername
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer }
