import { Card, Col, Pagination, Row } from 'antd';
import bg from '../../assets/images/bg_2.jpg';
import { useState } from 'react';

const Content4  = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const items = {
        1: ['Item 1 - Page 1'],
        2: ['Item 2 - Page 2'],
        3: ['Item 3 - Page 3'],
    };
    const handlePageChange = page => {
        setCurrentPage(page);
    };
    const numItems = Object.keys(items).length;
    
    return (
        <div>
            <div className='myTicket' style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '2% 10% 2% 10%'}}>
                <Col gutter={16}>
                    <Row span={6}>
                        <Card bordered={true} style={{ width: '100%', height: 'auto', color: '#3C7363',  borderWidth: '3px', borderColor: 'rgba(60, 115, 99, 0.5)', borderStyle: 'solid'}}>
                            
                        <img id="imgElementId" src={bg} alt="Logo" style={{ width: '100%', height: 'auto', maxHeight: '400px', marginBottom: '10px' }} />
                        <div className="text" style={{ width: '100%', height: 'auto', maxHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <p style={{ margin: 0 }}><strong>Mã đơn hàng:</strong> {items[currentPage][0]}</p>
                            <p style={{ margin: 0 }}><strong>Được đặt bởi:</strong> Text</p>
                        </div>
                        </Card>
                    </Row>
                    <Row span={18}>
                    <Card bordered={true} style={{ width: '100%', height: 'auto', marginTop: '20px', color: '#3C7363', borderWidth: '4px', borderColor: 'rgba(60, 115, 99, 0.5)', borderStyle: 'solid'}}>
                        <h2>Chúc mừng bạn đã mua vé thành công! Vui lòng chuẩn bị sẵn vé tại nơi soát vé.</h2>
                        <hr />
                        <p style={{fontSize: '18px'}}><strong>Điều khoản và điều kiện:</strong></p>
                        <p>- Vé này chỉ dành cho 1 (một) người vào cửa.</p>
                        <p>- Không hoàn tiền cho vé đã thanh toán.</p>
                        <p>- Người mua phải trình vé ở cửa để tham gia sự kiện. </p>
                        <p>- Người mua chịu trách nhiệm bảo mật thông tin mã vé. </p>
                        <p>- Khi mua vé, tức là người mua đã đồng ý với các điều khoản và điều kiện được ghi rõ tại vivu-ticket. </p>
                        <hr />
                        <p style={{fontSize: '18px'}}><strong>Bạn có câu hỏi? Xin hãy liên hệ:</strong></p><br></br>
                        <p><strong>Đại diện Vivu:</strong> abc@gmail.com</p>
                        <p><strong>Phone:</strong> 1900.**** (VI)</p>
                        <p><strong>Thời gian làm việc: </strong>Từ thứ 2 - thứ 6 (8:30 - 18:30)</p>
                        
                    </Card>
                    </Row>
                </Col>

            </div>
            {numItems > 1 && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Pagination defaultCurrent={1} total={30} onChange={handlePageChange} />
                </div>
            )}
        </div>
    );
};
export default Content4;




// import { useState, useRef } from 'react';
// import { Card, Col, Pagination, Row } from 'antd';
// import bg from '../../assets/images/bg_2.jpg';
// import ReactToPrint from 'react-to-print';

// const Content4  = () => {
//     const [currentPage, setCurrentPage] = useState(1);

//     const items = {
//         1: ['Item 1 - Page 1'],
//         2: ['Item 2 - Page 2'],
//         3: ['Item 3 - Page 3'],
//     };

//     const handlePageChange = page => {
//         setCurrentPage(page);
//     };

//     const numItems = Object.keys(items).length;
    
//     return (
//         <div>
//             <div className='myTicket' style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '2% 10% 2% 10%'}}>
//                 <Col gutter={16}>
//                     <Row span={6}>
//                         <Card bordered={true} style={{ width: '100%', height: 'auto', color: '#3C7363',  borderWidth: '3px', borderColor: 'rgba(60, 115, 99, 0.5)', borderStyle: 'solid'}}>
                            
//                         <img id="imgElementId" src={bg} alt="Logo" style={{ width: '100%', height: 'auto', maxHeight: '400px', marginBottom: '10px' }} />
//                         <div className="text" style={{ width: '100%', height: 'auto', maxHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                             <p style={{ margin: 0 }}><strong>Mã đơn hàng:</strong> {items[currentPage][0]}</p>
//                             <p style={{ margin: 0 }}><strong>Được đặt bởi:</strong> Text</p>
//                         </div>
//                         </Card>
//                     </Row>
//                     <Row span={18}>
//                     <Card bordered={true} style={{ width: '100%', height: 'auto', marginTop: '20px', color: '#3C7363', borderWidth: '4px', borderColor: 'rgba(60, 115, 99, 0.5)', borderStyle: 'solid'}}>
//                         <h2>Chúc mừng bạn đã mua vé thành công! Vui lòng chuẩn bị sẵn vé tại nơi soát vé.</h2>
//                         <hr />
//                         <p style={{fontSize: '18px'}}><strong>Điều khoản và điều kiện:</strong></p>
//                         <p>- Vé này chỉ dành cho 1 (một) người vào cửa.</p>
//                         <p>- Không hoàn tiền cho vé đã thanh toán.</p>
//                         <p>- Người mua phải trình vé ở cửa để tham gia sự kiện. </p>
//                         <p>- Người mua chịu trách nhiệm bảo mật thông tin mã vé. </p>
//                         <p>- Khi mua vé, tức là người mua đã đồng ý với các điều khoản và điều kiện được ghi rõ tại vivu-ticket. </p>
//                         <hr />
//                         <p style={{fontSize: '18px'}}><strong>Bạn có câu hỏi? Xin hãy liên hệ:</strong></p><br></br>
//                         <p><strong>Đại diện Vivu:</strong> abc@gmail.com</p>
//                         <p><strong>Phone:</strong> 1900.**** (VI)</p>
//                         <p><strong>Thời gian làm việc: </strong>Từ thứ 2 - thứ 6 (8:30 - 18:30)</p>
                        
//                     </Card>
//                     </Row>
//                 </Col>
//             </div>
//             {numItems > 1 && (
//                 <div style={{ marginTop: '20px', textAlign: 'center' }}>
//                     <Pagination defaultCurrent={1} total={30} onChange={handlePageChange} />
//                 </div>
//             )}
//         </div>
//     );
// };

// const MyTicket = () => {
//     const contentRef = useRef();

//     return (
//         <div>
//             <ReactToPrint
//                 trigger={() => <button>In My Ticket</button>}
//                 content={() => contentRef.current}
//             />
//             <Content4 ref={contentRef} />
//         </div>
//     );
// };

// export default MyTicket;
