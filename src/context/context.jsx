import React, {Component, createContext} from 'react';

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return (
        class ParentComponent extends Component {
            state = {
                totalOrder: 0
            }

            dispatch = (action) => {
                switch (action.type) {
                    case "PLUS_ORDER":
                        return this.setState({
                            totalOrder: this.state.totalOrder + 1
                        })           
                        break;
                    case "MINUS_ORDER":
                        let totalOrder = this.state.totalOrder ? this.state.totalOrder-1 : 0; 
                        return this.setState({
                            totalOrder: totalOrder
                        })           
                        break;
                    default:
                        return this.state;
                }
            }

            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch,
                        }
                    }>
                        <Children {...this.props}/>
                    </Provider>
                );
            }
        }
    );
}

export default GlobalProvider;

// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render(){
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                );
            }
        }
    )
}
