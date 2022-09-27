import React, { Component } from "react";

export default class Modal extends Component {
    render() {
        let { shoeDetail } = this.props;
        let { name, alias, description, image, price } = shoeDetail;
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true" >
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header py-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body py-0">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img className="img-fluid" src={image} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <h2>{name}</h2>
                                        <p style={{ color: "orangered", fontSize: "18px", }} > {price}$ </p>
                                        <p style={{ fontWeight: 600 }}> {description} </p>
                                        <button className="btn btn-warning mr-2"> Buy </button>
                                        <button className="btn btn-secondary"> See similar product </button>
                                        <p style={{ fontSize: "1.1rem" }} className="mt-5" >
                                            <span style={{ fontWeight: 600 }}> Category:{" "} </span> {alias}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}