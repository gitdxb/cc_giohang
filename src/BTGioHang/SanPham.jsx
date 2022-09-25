import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    console.log(this.props)
    let {phone} = this.props;
    return (
      <div className="card">
          <img className="card-img-top" src={phone.hinhAnh} alt="" />
          <div className="card-body">
              <h4 className="card-title">{phone.tenSP}</h4>
              <p className="card-text">{phone.giaBan}</p>
              <button onClick={() => {
                  this.props.addToCart(phone);
              }} data-toggle="modal" data-target="#modelId" className='btn btn-danger'>Thêm giỏ hàng</button>
          </div>
    </div>
    )
  }
}
