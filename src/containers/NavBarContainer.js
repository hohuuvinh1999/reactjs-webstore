import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './../components/NavBar';


class NavBarContainer extends Component {

    render() {
        var { NavBarRD } = this.props;
        // console.log(NavBarRD);
        return (
            <div id="category--box" className="p-3 float-left" style={{ width: '180px', height: 'calc(100vh - 70px)', background: '#fff', position: 'fixed' }}>
                <p className="font-weight-bold cl" style={{ fontSize: '130%' }}><img src="image/icon/menu.svg" /> Danh mục</p>
                { this.showNavBarItem(NavBarRD)}
            </div>
        )
    }

    showNavBarItem = (NavBarRD) => {
        var result = '';
        // var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        result = NavBarRD.map((item, index) => {
            return (
                <NavBar key={index} item={item} index={index} />
            )
        })
        return result;
    }
}
const mapStateToProps = state => {
    return {
        NavBarRD: state.NavBarRD
    }
}
export default connect(mapStateToProps, null)(NavBarContainer);
