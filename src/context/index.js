import React, { createContext } from "react";
const MyProvider= createContext()

class MyContext extends React.PureComponent {
    state = { 
        open: false
     } 
    
    handeleOpenMenu=()=>{
        this.setState({
            open: !this.state.open
        })
    }


    render() { 
        return (
            <MyProvider.Provider value={{
                open: this.state.open,
                menuFun: this.handeleOpenMenu
            }}>
                {this.props.children}
            </MyProvider.Provider>
        );
    }
}
 
export {MyContext ,MyProvider};