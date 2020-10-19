import React, { Component } from 'react'

export default class Item extends Component {

    render() {
        var { item2, index } = this.props;
        return (
            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2">
                <div style={{ width: '100%', background: '#fff', position: 'relative' }}>
                    <div className="mb-0" style={{ width: '100%', height: '400px', background: '#fff' }}>
                        <img src={`image/web/` + item2.image} width="100%" height="100%" style={{ objectFit: 'cover' }} />
                        <div style={{ width: '100px', position: 'absolute', marginTop: '-380px', display: 'flex' }}>
                            <div style={{ width: '30px', height: '30px', background: '#e43636' }} />
                            <div style={{ width: '70px', height: '30px', background: '#f94747' }}>
                                <p className="text-white font-weight-bold text-center" style={{ lineHeight: '30px' }}>HOT</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', right: 0, width: '200px', height: '40px', marginTop: '-40px' }}>
                        <div style={{ borderBottom: '40px solid #ff5c01', borderLeft: '25px solid transparent', width: '200px' }}>
                            <p className="text-white font-weight-bold float-right ml-2" style={{ position: 'absolute', lineHeight: '40px', fontSize: '130%' }}>{item2.price} VND</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
