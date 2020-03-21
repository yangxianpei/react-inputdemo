import React,{Component} from 'react'
import {InputData} from '../context'
class InputBox extends Component{
    render(){
        return (
            <InputData.Provider value={this.props.data||{}}>
                {this.props.children}
            </InputData.Provider>
        )
    }
}

export default InputBox