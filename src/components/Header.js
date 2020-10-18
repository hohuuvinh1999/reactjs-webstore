import React, { Component } from 'react';
import Menu from './Menu';


export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid p-3 sdhd" style={{ height: '70px', position: 'fixed', background: '#fff', width: '100%', zIndex: 999 }}>
                <div id="logo--box" className="float-left" style={{ width: '160px', height: '40px', display: 'flex' }}>
                    <h2 className="font-weight-bold">WEB</h2><h2 className="cl font-weight-bold">store</h2>
                </div>
                <div id="search--box" className="float-left pl-4 pr-4" style={{ width: 'calc(100% - 160px - 620px)', height: '40px' }}>
                    <div className="shadow-sm pl-2" style={{ height: '40px', width: '100%' }}>
                        <input className=" float-left" type="text" name style={{ border: 0, width: 'calc(100% - 50px)', height: '100%', outline: 'none' }} />
                        <div className="float-right bg p-2 pl-3" style={{ width: '50px', height: '40px' }}><i className="fa fa-search text-white" aria-hidden="true" /></div>
                    </div>
                </div>
                <div id="menu--box" className="float-right" style={{ width: '620px', height: '40px' }}>
                    <Menu />
                </div>
                <div id="menu--box__reponsive" className="float-right" style={{ width: '40px', height: '40px', background: 'pink', display: 'none' }}>
                </div>
            </div>
        )
    }
}
