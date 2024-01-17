import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className='col-12 col-sm-6 col-md-4'>

                <div className="card" >
                    <img src={this.props.shekil} height={300} style={{"objectFit":"contain"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.basliq}</h5>
                        <p className="card-text">{this.props.qiymet}$</p>
                        <a href="#" className="btn btn-primary">Buy now</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Card