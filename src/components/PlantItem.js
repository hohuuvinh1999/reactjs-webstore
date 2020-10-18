import React, { Component } from 'react'

export default class PlantItem extends Component {
    render() {
        return (
            <div className="col-3 p-3">
                <div id="box--price" className="shadow-sm pb-3" style={{ width: '100%', border: '3px solid #fff' }}>
                    <div id="box--price__header" style={{ width: '100%', height: '30px', background: '#fff' }}>
                        <p className="text-center text-white font-weight-bold">PLAN 1</p>
                    </div>
                    <div>
                        <div className="p-3 pb-1">
                            <p className="text-center font-weight-bold cl mb-2" style={{ fontSize: '150%' }}>BASIC</p>
                            <p className="text-center mb-2">Gói khởi nghiệp dành cho các cửa hàng nhỏ lẻ muốn kinh doanh trực tuyến</p>
                            <p className="text-center font-weight-bold cl mb-0" style={{ fontSize: '200%' }}>900.000đ</p>
                            <p className="text-center mb-4" style={{ fontSize: '90%', opacity: '0.8' }}>Bao gồm source - domain - hosting</p>
                            <div className="btn bg text-white mb-0" style={{ width: '100%', borderRadius: 0 }}>Xem mẫu</div>
                        </div>
                        <div id="combo--box" className="mt-2">
                            <div id="combo--box__icon" className="text-center">
                                <i className="fa fa-check cl" aria-hidden="true" />
                            </div>
                            <div id="combo--box__text">
                                <p style={{}}>Tên miền .com</p>
                            </div>
                        </div>
                        <div id="combo--box" className="mt-2">
                            <div id="combo--box__icon" className="text-center">
                                <i className="fa fa-check cl" aria-hidden="true" />
                            </div>
                            <div id="combo--box__text">
                                <p>Hosting: 1000 MB</p>
                            </div>
                        </div>
                        <div id="combo--box" className="mt-2">
                            <div id="combo--box__icon" className="text-center">
                                <i className="fa fa-check cl" aria-hidden="true" />
                            </div>
                            <div id="combo--box__text">
                                <p>Băng thông không giới hạn</p>
                            </div>
                        </div>
                        <div id="combo--box" className="mt-2">
                            <div id="combo--box__icon" className="text-center">
                                <i className="fa fa-check cl" aria-hidden="true" />
                            </div>
                            <div id="combo--box__text">
                                <p>Thiết kế logo đơn giản</p>
                            </div>
                        </div>
                        <div id="combo--box" className="mt-2">
                            <div id="combo--box__icon" className="text-center">
                                <i className="fa fa-times cl" aria-hidden="true" />
                            </div>
                            <div id="combo--box__text">
                                <p>Tặng gói tin rao vặt</p>
                            </div>
                        </div>
                        <div id="combo--box" className="mt-2">
                            <div id="combo--box__icon" className="text-center">
                                <i className="fa fa-times cl" aria-hidden="true" />
                            </div>
                            <div id="combo--box__text">
                                <p>Hosting: 1000 MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
