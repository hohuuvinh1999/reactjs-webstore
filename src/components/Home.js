import React, { Component } from 'react';
import Header from './Header';

import HomeContent from './HomeContent';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <HomeContent />
                    <div style={{ clear: 'both' }} />
                </div>
            </div>
        )
    }
}
