import React, { Component } from 'react';
import Header from './Header';

import PlantContent from './PlantContent';

export default class Plant extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <PlantContent />
                    <div style={{ clear: 'both' }} />
                </div>
            </div>
        )
    }
}
