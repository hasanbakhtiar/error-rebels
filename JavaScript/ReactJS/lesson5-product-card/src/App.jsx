import React, { Component } from 'react'
import phonedata from './data/productdata';
import Card from './components/Card';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>Products</h1>
          <div className='row'>
        {phonedata.map(item=><Card
        alldata={item}
      
        />)}
            </div>
      </div>
    )
  }
}

export default App