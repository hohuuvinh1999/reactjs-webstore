import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { actFetchItemsRequest } from './../actions/index';
import { connect } from 'react-redux';
import Header from './Header';
import RelateContainer from './../containers/RelateContainer';

function ItemContent(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams();
    const ITEM = props.item;
    const details = ITEM.filter((item, index) => {
        if (item.id == id) {
            return item;
        }
    })
    // console.log(details);
    return (
        <div className="p-0">
            {details.map(item => (
                <div key={item.id}>

                    <Header />
                    <div style={{ paddingTop: '70px' }}>
                        <div id="content--box" className="p-2 float-right" style={{ width: '100%', background: '#fff', marginLeft: '180px' }}>
                            <div id="content" style={{ background: '#fff', width: '100%' }}>
                                <div id="page--content__box" className="mt-4" style={{ width: '90%', margin: 'auto' }}>
                                    <div className="row m-0">
                                        <div id="page--content--image__box" className="col-12 col-md-4 col-lg-4 p-3 mt-4 mb-5">
                                            <div style={{ width: '100%', height: '400px', overflowY: 'auto' }}>
                                                <img src={`../image/web/` + item.image} width="100%" />
                                            </div>
                                            <div className="mt-3" style={{ width: '100%', display: 'flex' }}>
                                                <div className="p-1" style={{ width: '33%', border: '1px solid #ff5c01' }}>
                                                    <div style={{ height: '90px' }}>
                                                        <img src={`../image/web/` + item.image} width="100%" height="100%" style={{ objectFit: 'cover' }} />
                                                    </div>
                                                </div>
                                                <div className="p-1" style={{ width: '33%' }}>
                                                    <div style={{ height: '90px' }}>
                                                        <img src={`../image/web/` + item.image} width="100%" height="100%" style={{ objectFit: 'cover' }} />
                                                    </div>
                                                </div>
                                                <div className="p-1" style={{ width: '33%' }}>
                                                    <div style={{ height: '90px' }}>
                                                        <img src={`../image/web/` + item.image} width="100%" height="100%" style={{ objectFit: 'cover' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="page--content--text__box" className="col-12 col-md-8 col-lg-8 p-3 mt-2 mb-5 pl-4">
                                            <div className="p-2">
                                                <p className="font-weight-bold mb-0" style={{ fontSize: '150%' }}>{item.title}</p>
                                                <p className="mb-2 cl font-weight-bold">{item.note}</p>
                                                <p className="mb-2">{item.content}
                                                </p>


                                            </div>
                                            <div className="row m-0">
                                                <div className="col-6 col-md-6 col-lg-3 p-2">
                                                    <div className="btn btn-danger" style={{ width: '100%' }}><i className="fa fa-eye mr-3" aria-hidden="true" />Xem trước</div>
                                                </div>
                                                <div className="col-6 col-md-6 col-lg-3 p-2">
                                                    <div className="btn btn-danger bg" style={{ width: '100%' }}><i className="fa fa-shopping-cart mr-3" aria-hidden="true" />Đặt mua</div>
                                                </div>
                                                <div className="col-6 col-md-6 col-lg-3 p-2">
                                                    <div className="btn btn-danger" style={{ width: '100%' }}><i className="fa fa-phone mr-3" aria-hidden="true" />Gọi</div>
                                                </div>
                                                <div className="col-6 col-md-6 col-lg-3 p-2">
                                                    <div className="btn btn-danger " style={{ width: '100%' }}><i className="fa fa-envelope mr-3" aria-hidden="true" />Nhắn tin</div>
                                                </div>
                                            </div>
                                            <div className="row m-0 mt-3">
                                                <div className="col-12 col-md-6 p-2">
                                                    <div className="p-2" style={{ border: '1px solid #ff5c01' }}>
                                                        <p className="cl font-weight-bold mb-2">Tính năng</p>
                                                        <div className="mb-2" style={{ width: '100%', height: '1px', background: '#ff5c01' }} />
                                                        <p>{item.feature}</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 p-2">
                                                    <div className="p-2" style={{ border: '1px solid #ff5c01' }}>
                                                        <p className="cl font-weight-bold mb-2">Khuyến mãi</p>
                                                        <div className="mb-2" style={{ width: '100%', height: '1px', background: '#ff5c01' }} />
                                                        <p>{item.sale}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col-12">
                                        <div className="p-4" style={{ width: '80%', margin: 'auto', position: 'relative' }}>
                                            <img src="../image/web/mac1.png" style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="p-4" style={{ width: '80%', margin: 'auto' }}>
                                            <img src="../image/bg_ipad.png" style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="p-4" style={{ width: '60%', margin: 'auto' }}>
                                            <img src="../image/bg_ip.png" style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t.item--box{\n\t\t\t\t\tborder: 1px solid #f9f9f9;\n\t\t\t\t}\n\t\t\t\t.item--box:hover{\n\t\t\t\t\tborder: 1px solid #ff5c01;\n\t\t\t\t\ttransition: 0.6s\n\t\t\t\t}\n\t\t\t" }} />
                            <div className="mt-3" style={{ width: '95%', margin: 'auto' }}>
                                <p className="font-weight-bold ml-2" style={{ fontSize: '130%' }}>Các mẫu Website khác</p>
                                <div className="row m-0">
                                    <RelateContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

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
export default connect(mapStateToProps, mapDispatchToProps)(ItemContent);
