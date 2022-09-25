import React, { Component } from 'react'
import DanhSachRedux from './DanhSachRedux'
import GioHangRedux from './GioHangRedux'

export default class BTGioHangRedux extends Component {

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
                <DanhSachRedux phoneList={this.phoneList} />
                <GioHangRedux />
            </div>
        )
    }
}
