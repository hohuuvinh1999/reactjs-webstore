import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        var { item } = this.props;
        // console.log(item);
        return (
            <p className="font-weight-bold ml-4">{item.title}</p>
        )
    }
}
