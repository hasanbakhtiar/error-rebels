import React, { Component } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import data from './data/product';



 class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container mt-5">
                    <div className="row g-5 test">
                        {data.map(i=>{
                           return <Card shekil={i.photo} basliq={i.title} qiymet={i.price}/>

                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default App