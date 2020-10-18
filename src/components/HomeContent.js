import React, { Component } from 'react';
import NavBarContainer from './../containers/NavBarContainer';
import Banner from './Banner';
import CardContainer from './../containers/CardContainer';
import NavBar2 from './NavBar2';
import Item from './Item';

export default class HomeContent extends Component {
    render() {
        return (
            <div style={{ paddingTop: '70px' }}>
                <NavBarContainer />
                <div id="content--box" className="p-2 float-right" style={{ width: 'calc(100% - 180px)', background: '#f7f7f7', marginLeft: '180px' }}>
                    <Banner />
                    <div className="mt-3" style={{ width: '90%', margin: 'auto' }}>
                        <CardContainer />
                        <NavBar2 />
                        <div className="row m-0">
                            <Item />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
