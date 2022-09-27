import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSP extends Component {
    renderShoeList = () => {
        return this.props.shoesList.map((shoe) => {
            return (
                <SanPham getShoeDetail={this.props.getShoeDetail} key={`pair-${shoe.id}`} shoe={shoe} />
            );
        });
    };

    render() {
        return <div className="row">{this.renderShoeList()}</div>;
    }
}