import React, { Component } from 'react'

export default class GioHang extends Component {
  renderCart = () => {
    return this.props.gioHang.map((spGH) => { 
        return <tr key={`cart-${spGH.maSP}`}>
            <td>{spGH.maSP}</td>
            <td>
                <img style={{width:"40px"}} src={spGH.hinhAnh} alt="" />
            </td>
            <td>
                {spGH.tenSP}
            </td>
            <td>
                <button onClick={() => {
                    this.props.changeSL(spGH.maSP, 1)
                }} className='btn btn-success'>+</button>
                    <span>  {spGH.soLuong}  </span>
                <button onClick={() => {
                    this.props.changeSL(spGH.maSP, -1)
                }} className='btn btn-danger'>-</button>
            </td>
            <td>{spGH.giaBan.toLocaleString()}</td>
            <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
            <td>
                <button onClick={() => {
                    this.props.removeCart(spGH.maSP);
                }} className='btn btn-danger'>Xoá</button>
            </td>
        </tr>
     })
}
  render() {
    return (
      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
