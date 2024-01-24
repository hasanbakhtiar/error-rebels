import React, { Component } from 'react'

class List extends Component{
    componentWillUnmount(){
        alert('deleted')
    }
    
    render(){
        return(
            <h1>List</h1>
        )
    }
}


 class LifeCycle extends Component {

    constructor(){
        super();
        this.state={
            display:true
        }
    }


    // componentDidMount(){
    //         this.setState({
    //             text:"changed text"
    //         })
    // }

    componentDidUpdate(){
        console.log('run');
    }



    



  render() {

    let a; 
    if (this.state.display) {
        a = <List />
    }
    return (
     <>
     {a}
      <div>{this.state.text}</div>
      <button onClick={this.changeText}>change</button>
      <button onClick={()=>{  this.setState({
            display:false
        })}}>delete</button>
      </>
    )
  }
}

export default LifeCycle