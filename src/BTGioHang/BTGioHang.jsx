import React, { Component } from 'react'

export default class BTGioHang extends Component {

    phoneList = [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          manHinh: "AMOLED, 6.2, Full HD+",
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 5700000,
          hinhAnh: "./img/phone/vsphone.jpg",
        },
        {
          maSP: 2,
          tenSP: "Meizu 16Xs",
          manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
          heDieuHanh: "Android 9.0 (Pie); Flyme",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 7600000,
          hinhAnh: "./img/phone/meizuphone.jpg",
        },
        {
          maSP: 3,
          tenSP: "Iphone XS Max",
          manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
          heDieuHanh: "iOS 12",
          cameraSau: "Chính 12 MP & Phụ 12 MP",
          cameraTruoc: "7 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 27000000,
          hinhAnh: "./img/phone/applephone.jpg",
        },
    ]

    // khai báo state
    state = {
        gioHang: []
    }

    renderCart = () => {
        return this.state.gioHang.map((spGH) => { 
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
                        this.changeSL(spGH.maSP, 1)
                    }} className='btn btn-success'>+</button>
                        <span>  {spGH.soLuong}  </span>
                    <button onClick={() => {
                        this.changeSL(spGH.maSP, -1)
                    }} className='btn btn-danger'>-</button>
                </td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                <td>
                    <button onClick={() => {
                        this.removeCart(spGH.maSP);
                    }} className='btn btn-danger'>Xoá</button>
                </td>
            </tr>
         })
    }

    renderProList = () => {
        return this.phoneList.map((phone) => { 
            return <div className="col-4" key={phone.maSP}>
                <div className="card">
                    <img className="card-img-top" src={phone.hinhAnh} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{phone.tenSP}</h4>
                        <p className="card-text">{phone.giaBan}</p>
                        <button onClick={() => {
                            this.addToCart(phone);
                        }} data-toggle="modal" data-target="#modelId" className='btn btn-danger'>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
         })
    }

    // input: thông tin sp đang đc click
    // output: sản phẩm được thêm vào mảng gioHang
    addToCart = (spClick) => {
        console.log(spClick); // chưa có soLuong

        let gioHangMoi = [...this.state.gioHang];
        // Tìm sp trong giỏ hàng có mã trùng với mã spClick
        let spFind = this.state.gioHang.find((spGH) => {
            // điều kiện tìm kiếm 
            return spClick.maSP === spGH.maSP;
         })
         if(spFind) {
            // tìm thấy: soLuong +1
            spFind.soLuong += 1;
         } else {
            // copy thuộc tính của spClick và thêm thuộc tính mới soLuong
            let spGHMoi = {...spClick, soLuong: 1}
            // gioHangMoi = giỏ hàng cũ + sản phẩm spGHoi
            gioHangMoi = [...gioHangMoi, spGHMoi]
         }

        // Nếu sp cần thêm đã tồn tại (dựa vào maSP): soLuong + 1
        // Nếu chưa có thì thêm hàng mới

        this.setState({
            // lưu vào state mảng giỏ hàng mới (chứa các sp mới thêm)
            gioHang: gioHangMoi
        })
    }

    removeCart = (maXoa) => {
        let gioHangCapNhat = [...this.state.gioHang];
        // tìm vị trí phần tử cần xoá, findIndex
        // splice: xoá phần tử theo vị trí

        // tìm k thấy, trả về -1
        let indexXoa = gioHangCapNhat.findIndex((spGH) => { 
            return spGH.maSP === maXoa;
         })

         if(indexXoa > -1) {
            // tìm thấy
            gioHangCapNhat.splice(indexXoa, 1);
         }
         this.setState({
            gioHang: gioHangCapNhat
         })
    }

    changeSL = (maSP, sl) => {
        let gioHangCapNhat = [...this.state.gioHang]
        let spFind = gioHangCapNhat.find((spGH) => { 
            return spGH.maSP === maSP;
         })

         if (spFind) {
            spFind.soLuong = spFind.soLuong + sl;

            if (spFind.soLuong < 1) {
                alert("Số lượng tối thiểu là 1");
                spFind.soLuong = spFind.soLuong - sl;
            }
         }
         this.setState({
            gioHang: gioHangCapNhat
         })

    }


    render() {
        return (
        <div className='container'>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <p className='text-white'>Giỏ hàng (0)</p>
                        </div>
                    </div>
                </nav>
                <div className="row py-5">
                    {this.renderProList()}
                </div>
                
                {/* <!-- Modal --> */}
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
        </div>
        )
    }
}
