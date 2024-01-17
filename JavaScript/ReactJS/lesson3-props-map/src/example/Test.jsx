import React, { Component } from 'react'



class List extends Component{
    render(){
        return(
            <ul>
                <li>{this.props.mydataone}</li>
                <li>{this.props.mydatatwo}</li>
                <li>{this.props.mydatathree}</li>
            </ul>
            
        )
    }
}



class Test extends Component {
  render() {
    return (
      <div>
        <List mydataone ="Ramazan" mydatatwo="Ismayilov" mydatathree="Baku"/>
        <List mydataone ="Ayla" mydatatwo="Resulzada" mydatathree="Baku"/>
        <List mydataone ="Hecer" mydatatwo="Azimova" mydatathree="Baku"/>
        <List mydataone ="Naile" mydatatwo="Abdullayeva" mydatathree="Baku"/>
      </div>
    )
  }
}

export default Test