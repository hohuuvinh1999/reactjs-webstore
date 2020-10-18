import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div id="banner--box" style={{ height: '340px', background: 'pink', width: '100%' }}>
                <img src="image/bg_home.jpg" width="100%" height="100%" style={{ objectFit: 'cover' }} />
            </div>
        )
    }
}
