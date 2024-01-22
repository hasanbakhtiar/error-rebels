import React, { Component } from 'react'

class Card extends Component {
    render() {
        const {id,photo,title,price,photoOther,color,stock} = this.props.alldata;
        return (
            <div className='col-12 col-sm-6 col-md-4'>
                <div className="card" >
                   <div className='photo-con'>
                   <img height={300} style={{objectFit:"cover"}} src={photo} className="card-img-top one-photo" alt="..." />
                   <img height={300} style={{objectFit:"cover"}} src={photoOther} className="card-img-top two-photo" alt="..." />
                   </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price}$</p>
                        <div>
                        {color==="purple" ? <button className='btn' style={{backgroundColor:"purple"}}></button> : color==="black" ? <button className='btn' style={{backgroundColor:"black"}}></button> : color==="white" ? <button className='btn' style={{border:"2px solid #000"}}></button>:<button className='btn'></button>}
                        </div>
                        {stock? <a href="#" className="btn btn-primary">Buy Now</a>:<button disabled  className="btn btn-primary">Buy Now</button>}
                    </div>
                </div>
            </div>

        )
    }
}

export default Card