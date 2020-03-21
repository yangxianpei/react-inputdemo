import React,{Component} from 'react'
import {InputData} from '../context'
import './inputItem.css'
export default class InputItem extends Component{
    static contextType =InputData
    constructor(){
        super()
        this.state={
            inputValue:0,
            inputType:'number',
            value:"",
            data:this.context,
            options:['%','px','vm'],
            flag:true,
        }
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        let value = this.context[this.props.type]
        if(typeof value =='string'){
            this.setState({
                inputType:'text',
            })
        }
        this.setState({
            value:this.context[this.props.type],
        })
    }
    change=(e)=>{
        this.setState({
            data:{...this.context,[this.props.type]:e.target.value}
        })
    }
    render(){
      
        return (
            <>
            <div className='box'>
            <div>{this.props.type}</div>
            <input type={this.state.inputType}  defaultValue={this.state.flag?this.state.value:''} ref={this.inputRef} onChange={this.change} className='input' style={{width:this.props.width+'px'}}  />
            <select className='spanitem'>
            {this.state.options.map((item,idx)=>
                <option  key={idx}>{item}</option>
                )}
            </select>
            </div>
            </>
        )
    }
}