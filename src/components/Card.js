import React, { Component } from 'react'

export default class Card extends Component {
    render() {

        var { item } = this.props;
        // console.log(item);


        return (
            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-4 p-2">
                <div className="p-4" style={{ width: '100%', background: '#fff', minHeight: '260px' }}>
                    <div className="mb-2" style={{ width: '100%', height: '100px', background: 'green' }} />
                    <p className="text-center font-weight-bold mb-1" style={{ fontSize: '120%' }}>{item.title}</p>
                    <p className="text-center mb-0" style={{ lineHeight: '22px' }}>{item.content}</p>
                </div>
            </div>
        )
    }
}
