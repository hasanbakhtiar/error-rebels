import React, { Component } from 'react'
import samsungPhoto from './img/samsung-galaxy-s24-ultra-15-4091104179.jpg'
 class App extends Component {
    constructor(){
        super();
        // this.myTitle = this.myTitle.bind(this);
        this.state={
            title:"Samsung s24",
            price:2400,
            count:1
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    decrement=()=>{
        if (this.state.count>1) {
            this.setState({
                count:this.state.count-1
            })
        }
    }

    reset=()=>{
        this.setState({
            count:1
        })
    }
    
  render() {
    return (
      <div className='container my-5 bg-dark p-5'>
        <img width={100} src={samsungPhoto} alt="err" />
        <h2 className='text-danger'>Title:{this.state.title}</h2>
        <h3 className='text-warning'>price:{this.state.price * this.state.count}$</h3>
        
        <button className='mx-3 btn btn-danger' onClick={this.decrement}><i className="fa-solid fa-minus"></i></button>
        <span className='text-light'>{this.state.count}</span>
        <button className='mx-3 btn btn-success' onClick={this.increment}><i className="fa-solid fa-plus"></i></button>
        <button className='mx-2 btn btn-warning' onClick={this.reset}>reset</button>
      </div>
    )
  }
}

export default App