import React from 'react'
import Reactdom from 'react-dom'
import InputBox from './components/InputBox'
import InputItem from './components/inputItem'
let data ={
    Left:300,
    Width:'auto',
    Height:100,
    Top:200,
}
Reactdom.render(<InputBox data={data} >
<InputItem type='Width' width='300'/>
<InputItem type='Top'/>
<InputItem type='Left'/>
<InputItem type='Height'/>
</InputBox>,document.getElementById('root'))