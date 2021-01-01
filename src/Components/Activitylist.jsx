import React, { Component } from 'react'

import './CSS/Activity.css'
export default class Activitylist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             item:'',
             items:[]
        }
    }
    handelinput =(e)=>{
        
        const value =  e.target.value
       
        // console.log(value)
        this.setState({item:value})
    }
    handelclick =()=>{
        // console.log(this.state.item)
        // console.log(this.state.items)
        const item = this.state.item
        const items = this.state.items
        items.push(item )
        this.setState({items:items})
    }
    ckickb1=(index)=>{
        console.log(index)
        const new_items = this.state.items
        const new_item = new_items[index]
        new_items.pop(new_item)
        this.setState({items:new_items})
    }

    render() {
        return (
            <div>
                <h1>Activity List</h1>
                Activity:<input name="item" onChange={this.handelinput}></input>
                <button onClick={this.handelclick}>Add</button>
                {this.state.items.map((item ,index)=>{return(<div key={index} className='mydiv'>
                    <h1 >{item}</h1><button onClick={()=>this.ckickb1(index)}>delet</button>

</div>)})}
            </div>
        )
    }
}
