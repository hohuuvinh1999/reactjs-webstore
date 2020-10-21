import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchItemsRequest } from './../actions/index';
import ItemContent from './../components/ItemContent';


class ItemContentContainer extends Component {
    componentDidMount() {
        this.props.fetchAllItems();
    }
    render() {
        var { ItemRD } = this.props;
        // console.log(ItemRD);
        return (
            <div className="row m-0">
                {/* { this.showItem(ItemRD)} */}
                <ItemContent item={ItemRD}></ItemContent>
            </div>
        )
    }
    // showItem = (ItemRD) => {
    //     var result = '';
    //     result = ItemRD.map((Item2, index) => {
    //         return (
    //             <Item key={index} item2={Item2} index={index} />
    //         )
    //     })
    //     return result;
    // }
}
const mapStateToProps = state => {
    return {
        ItemRD: state.ItemRD
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllItems: () => {
            dispatch(actFetchItemsRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContentContainer);