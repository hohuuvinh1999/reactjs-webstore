import React, { Component } from 'react';
import Header from './Header';
import PaymentItemContainer from './../containers/PaymentItemContainer';
import PaymentInfo from './PaymentInfo';

export default class PaymentContent extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <div style={{ paddingTop: '70px' }}>
                        <div id="content--box" className="p-2 float-right" style={{ width: '100%', background: '#fff', marginLeft: '180px' }}>
                            <div id="content" style={{ background: '#fff', width: '100%' }}>
                                <div id="payment--check__box" className="mt-4" style={{ width: '80%', margin: 'auto' }}>
                                    <p className="font-weight-bold mb-4" style={{ fontSize: '170%' }}>Đơn hàng của bạn</p>
                                    <PaymentItemContainer />
                                    <PaymentInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ clear: 'both' }} />
                </div>
            </div>
        )
    }
}
