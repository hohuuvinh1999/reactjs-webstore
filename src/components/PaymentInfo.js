import React, { Component } from 'react'

export default class PaymentInfo extends Component {
    render() {
        return (
            <div className="row m-0">
                <div className="payment--info__box col-12 col-md-7 p-0 pr-3">
                    <p className="font-weight-bold mb-4 mt-4" style={{ fontSize: '170%' }}>Thông tin thanh toán</p>
                    <div className="p-3 pt-2" style={{ width: '100%', border: '1px solid #ebebf5' }}>
                        <p className=" mb-1" style={{ fontSize: '130%' }}>THÔNG TIN CÁ NHÂN</p>
                        <div className="bg mb-3" style={{ width: '10%', height: '2px' }} />
                        <p className="float-left mt-1" style={{ fontSize: '110%', width: '130px' }}>Họ tên *</p>
                        <div className="form-group float-right" style={{ width: 'calc(100% - 130px)' }}>
                            <input type="text" className="form-control" placeholder="Nhập họ tên" />
                        </div>
                        <div style={{ clear: 'both' }} />
                        <p className="float-left mt-1" style={{ fontSize: '110%', width: '130px' }}>Điện thoại *</p>
                        <div className="form-group float-right" style={{ width: 'calc(100% - 130px)' }}>
                            <input type="text" className="form-control" placeholder="Nhập họ tên" />
                        </div>
                        <div style={{ clear: 'both' }} />
                        <p className="float-left mt-1" style={{ fontSize: '110%', width: '130px' }}>Email *</p>
                        <div className="form-group float-right" style={{ width: 'calc(100% - 130px)' }}>
                            <input type="text" className="form-control" placeholder="Nhập họ tên" />
                        </div>
                        <div style={{ clear: 'both' }} />
                    </div>
                    <div className="p-3 pt-2 mt-3" style={{ width: '100%', border: '1px solid #ebebf5' }}>
                        <p className=" mb-1" style={{ fontSize: '130%' }}>GHI CHÚ KHI LÀM WEB</p>
                        <div className="bg mb-3" style={{ width: '10%', height: '2px' }} />
                        <div className="form-group">
                            <textarea className="form-control" rows={3} placeholder="Viết những yêu cầu thêm nếu có khi làm web" defaultValue={""} />
                        </div>
                    </div>
                    <div className="p-3 pt-2 mt-3" style={{ width: '100%', border: '1px solid #ebebf5' }}>
                        <p className=" mb-1" style={{ fontSize: '130%' }}>HÌNH THỨC THANH TOÁN</p>
                        <div className="bg mb-3" style={{ width: '10%', height: '2px' }} />
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                            <label className="form-check-label" htmlFor="exampleRadios1" style={{ fontSize: '110%' }}>
                                Chuyển khoảng ngân hàng
                        </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                            <label className="form-check-label" htmlFor="exampleRadios2" style={{ fontSize: '110%' }}>
                                Ví điện tử
                        </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option2" />
                            <label className="form-check-label" htmlFor="exampleRadios3" style={{ fontSize: '110%' }}>
                                Thanh toán trực tiếp
                        </label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 p-0 pl-3 payment--info__box">
                    <p className="font-weight-bold mb-4 mt-4" style={{ fontSize: '170%' }}>Dịch vụ kèm theo</p>
                    <div className="p-3 pt-2 mt-3" style={{ width: '100%', border: '1px solid #ebebf5' }}>
                        <p className=" mb-1" style={{ fontSize: '130%' }}>HOSTING (MÁY CHỦ)</p>
                        <div className="bg mb-3" style={{ width: '10%', height: '2px' }} />
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>Tôi đã có hosting</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }} />
                            <div style={{ clear: 'both' }} />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>G1 (100MB - 12 Tháng)</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }}>150.000đ</p>
                            <div style={{ clear: 'both' }} />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>G2 (1GB - 12 Tháng)</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }}>590.000đ</p>
                            <div style={{ clear: 'both' }} />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>G3 (2GB - 12 Tháng)</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }}>990.000đ</p>
                            <div style={{ clear: 'both' }} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>G4 (4GB - 12 Tháng)</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }}>1.490.000đ</p>
                            <div style={{ clear: 'both' }} />
                        </div>
                    </div>
                    <div className="p-3 pt-2 mt-3" style={{ width: '100%', border: '1px solid #ebebf5' }}>
                        <p className=" mb-1" style={{ fontSize: '130%' }}>DOMAIN (TÊN MIỀN)</p>
                        <div className="bg mb-3" style={{ width: '10%', height: '2px' }} />
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>Tôi đã có tên miền</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }} />
                            <div style={{ clear: 'both' }} />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>Tên miền .NET - 12 Tháng</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }}>220.000đ</p>
                            <div style={{ clear: 'both' }} />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>Tên miền .COM - 12 Tháng</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }}>290.000đ</p>
                            <div style={{ clear: 'both' }} />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>Tên miền .COM.VN - 12 Tháng</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }}>580.000đ</p>
                            <div style={{ clear: 'both' }} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                            <p className="float-left m-0" style={{ fontSize: '110%' }}>Tên miền .VN - 12 Tháng</p>
                            <p className="float-right cl font-weight-bold m-0" style={{ fontSize: '110%' }}>750.000đ</p>
                            <div style={{ clear: 'both' }} />
                        </div>
                    </div>
                    <div className="p-3 pt-2 mt-3" style={{ width: '100%', border: '1px solid #ebebf5' }}>
                        <p className=" mb-1" style={{ fontSize: '130%' }}>TỔNG ĐƠN HÀNG</p>
                        <div className="bg mb-3" style={{ width: '10%', height: '2px' }} />
                        <p className="float-left mb-2" style={{ fontSize: '110%' }}>G4 (4GB - 12 Tháng)</p>
                        <p className="float-right cl font-weight-bold mb-2" style={{ fontSize: '110%' }}>1.490.000đ</p>
                        <div style={{ clear: 'both' }} />
                        <p className="float-left mb-2" style={{ fontSize: '110%' }}>Tên miền .COM.VN - 12 Tháng</p>
                        <p className="float-right cl font-weight-bold mb-2" style={{ fontSize: '110%' }}>580.000đ</p>
                        <div style={{ clear: 'both' }} />
                        <p className="float-left mb-2 cl font-weight-bold" style={{ fontSize: '110%' }}>Tổng tiền</p>
                        <p className="float-right cl font-weight-bold mb-2" style={{ fontSize: '140%' }}>2.580.000đ</p>
                        <div style={{ clear: 'both' }} />
                        <div className="btn bg mt-2 text-white" style={{ width: '100%' }}>Hoàn tất đơn hàng</div>
                    </div>
                </div>
            </div>
        )
    }
}
