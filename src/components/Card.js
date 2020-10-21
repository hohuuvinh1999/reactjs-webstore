import React, { Component } from 'react'

export default class Card extends Component {
    render() {

        var { item } = this.props;
        // console.log(item);
        return (

            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-4 p-2">
                <div className="p-4" style={{ width: '100%', background: '#fff', minHeight: '240px' }}>
                    <div className="mb-1" style={{ width: '100%' }}>
                        <div style={{ width: '100px', margin: 'auto' }}>
                            <img src={`image/icon/` + item.image} width="100%" height="100%" />
                        </div>
                    </div>
                    <p className="text-center font-weight-bold mb-0" style={{ fontSize: '120%' }}>{item.title}</p>
                    <p className="text-center mb-0" style={{ lineHeight: '22px' }}>{item.content}</p>
                </div>
            </div>
        )
    }
}
