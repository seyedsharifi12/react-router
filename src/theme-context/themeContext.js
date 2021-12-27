import React from 'react'

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends React.Component {
    
    state = {
        theme: "dark"
    }

     toggleTheme = () => {
        return this.state.theme ==="dark"? this.state.theme="light":"dark"
    }
  
    render(){
        return(
            <Provider value={this.state.theme}>
                { this.props.children }
            </Provider>
        )
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }