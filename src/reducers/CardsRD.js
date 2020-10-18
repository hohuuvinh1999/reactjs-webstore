var initialState = [
    {
        id: 1,
        title: 'Thiết kế Web trọn gói giá rẻ',
        image: 'https://image-us.24h.com.vn/upload/2-2019/images/2019-04-07/1554606635-797-cover-1554560566-width640height480.jpg',
        content: 'Thiết kế web theo mẫu có sẵn, giá chỉ từ 1,9 triệu. TẶNG tên miền và hosting, chuẩn SEO, chuẩn mobile responsive.',
        active: true
    }, {
        id: 2,
        title: 'Thiết kế web theo yêu cầu',
        image: 'https://image-us.24h.com.vn/upload/2-2019/images/2019-04-07/1554606635-797-cover-1554560566-width640height480.jpg',
        content: 'Thiết kế web theo nhu cầu giao diện và tính năng riêng. Web code tay như web đặt tour, web ứng dụng',
        active: true
    }, {
        id: 3,
        title: 'Nền tảng tạo web trong 30s',
        image: 'https://image-us.24h.com.vn/upload/2-2019/images/2019-04-07/1554606635-797-cover-1554560566-width640height480.jpg',
        content: 'Thiết kế web theo mẫu có sẵn, giá chỉ từ 1,9 triệu. TẶNG tên miền và hosting, chuẩn SEO, chuẩn mobile responsive.',
        active: true
    }, {
        id: 4,
        title: 'Quảng cáo website',
        image: 'https://image-us.24h.com.vn/upload/2-2019/images/2019-04-07/1554606635-797-cover-1554560566-width640height480.jpg',
        content: 'Web24s cung cấp các dịch vụ để quảng bá cho website của bạn như Quảng cáo Google, quảng cáo Facebook',
        active: true
    }, {
        id: 5,
        title: 'Quản trị webste',
        image: 'https://image-us.24h.com.vn/upload/2-2019/images/2019-04-07/1554606635-797-cover-1554560566-width640height480.jpg',
        content: 'Dịch vụ quản trị website chuyên nghiệp và chăm sóc web toàn diện, giải pháp marketing hiệu quả, tiết kiệm',
        active: true
    }, {
        id: 6,
        title: 'Email doanh nghiệp',
        image: 'https://image-us.24h.com.vn/upload/2-2019/images/2019-04-07/1554606635-797-cover-1554560566-width640height480.jpg',
        content: 'Email doanh nghiệp đại diện cho thương hiệu của doanh nghiệp, tạo nên sự chuyên nghiệp',
        active: true
    }
];

const CardsRD = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}
export default CardsRD;