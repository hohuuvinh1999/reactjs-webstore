import React, { Component } from 'react'

export default class NavBar2 extends Component {
    render() {
        return (
            <div className="row m-0">
                <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-2">
                    <div className="category--button" style={{ width: '100%', height: '50px', background: '#fff' }}>
                        <p className="font-weight-bold text-center" style={{ lineHeight: '50px' }}>Bán hàng</p>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-2">
                    <div className="category--button" style={{ width: '100%', height: '50px', background: '#fff' }}>
                        <p className="font-weight-bold text-center" style={{ lineHeight: '50px' }}>Du lịch</p>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-2">
                    <div className="category--button" style={{ width: '100%', height: '50px', background: '#fff' }}>
                        <p className="font-weight-bold text-center" style={{ lineHeight: '50px' }}>Doanh nghiệp</p>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-2">
                    <div className="category--button" style={{ width: '100%', height: '50px', background: '#fff' }}>
                        <p className="font-weight-bold text-center" style={{ lineHeight: '50px' }}>Bất động sản</p>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-2">
                    <div className="category--button" style={{ width: '100%', height: '50px', background: '#fff' }}>
                        <p className="font-weight-bold text-center" style={{ lineHeight: '50px' }}>Giáo dục</p>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-2">
                    <div className="category--button" style={{ width: '100%', height: '50px', background: '#fff' }}>
                        <p className="font-weight-bold text-center" style={{ lineHeight: '50px' }}>Tin tức</p>
                    </div>
                </div>
            </div>
        )
    }
}
