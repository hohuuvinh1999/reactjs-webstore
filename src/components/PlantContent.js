import React, { Component } from 'react';
import PlantItem from './PlantItem';

export default class PlantContent extends Component {
    render() {
        return (
            <div style={{ paddingTop: '70px' }}>
                <div id="content--box" className="p-2" style={{ width: '100%', background: '#fff' }}>
                    <div id="content" className="pt-5" style={{ width: '90%', margin: 'auto' }}>
                        <div className="row m-0 p-3 pb-0 pt-0">
                            <div className="col-12 p-3 shadow-sm">
                                <p className="mb-0">BẢNG GIÁ THIẾT KẾ WEBSITE CHUYÊN NGHIỆP, TRỌN GÓI CHỈ 1,9 TRIỆU</p>
                            </div>
                        </div>
                        <div className="row m-0">
                            <PlantItem />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
