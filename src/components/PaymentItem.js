import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function PaymentItem(props) {
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
    return (
        <div>
            {details.map(item => (
                <div className="row m-0 sd" key={item.id}>
                    <div className="col-12 col-md-3 p-0 " style={{ background: 'pink', height: '270px' }}>
                        <img src={`../image/web/` + item.image} width="100%" height="100%" style={{ objectFit: 'cover' }} />
                    </div>
                    <div id="payment--check--content__box" className="col-5 p-3 pt-2">
                        <p className="font-weight-bold mb-0" style={{ fontSize: '150%' }}>{item.title}</p>
                        <p className="mb-2 cl font-weight-bold">{item.note}</p>
                        <p className="mb-2">{item.content}
                        </p>

                    </div>
                    <div id="payment--check--feature__box" className="col-4 p-2">
                        <div className="p-2" style={{ border: '1px solid #ff5c01', height: '100%' }}>
                            <p className="cl font-weight-bold mb-2">Tính năng</p>
                            <div className="mb-2" style={{ width: '100%', height: '1px', background: '#ff5c01' }} />
                            <p className="mb-0">{item.feature}</p>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PaymentItem;
