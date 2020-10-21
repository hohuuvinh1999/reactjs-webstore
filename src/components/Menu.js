import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <ul className="p-2" style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0, float: 'right' }}>
                <li exact to="/" className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>
                    <NavLink exact to="/">Trang chủ</NavLink></li>
                <li className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>Tính năng</li>
                <li className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>Công nghệ</li>
                <li exact to="/bang-gia" className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>
                    <NavLink exact to="/bang-gia">Bảng giá</NavLink></li>
                <li className="mr-5 font-weight-bold" style={{ fontSize: '105%' }}>Hỗ trợ</li>
            </ul>
        )
    }
}
