import { Table } from 'antd';
import PropTypes from 'prop-types';

const { Column } = Table;

const Content2 = ({ dataSource, userBuyTicket }) => {
    const totalAmount = dataSource.reduce((acc, cur) => acc + parseFloat(cur.total), 0);

    const TicketInfo = ({ label, value }) => (
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
            <span style={{ textTransform: 'lowercase', fontWeight: 'normal' }}>{label}:  </span>
            <span style={{ fontWeight: 'bold' }}>{value}</span>
        </p>
    );

    TicketInfo.propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    };
    
    // Thêm dòng mới cho totalAmount
    const dataWithTotal = [...dataSource, { key: 'Total', total: totalAmount }];

    return (
        <div style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '20px' }}>
            <div style={{ marginLeft: '12px' }}>
                <p style={{ fontSize: '26px', fontWeight: 'bold' }}>Xác nhận thông tin đặt mua vé tàu</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#dd5600' }}>Thông tin người mua vé:</p>
                <TicketInfo label="Username" value={userBuyTicket.username} />
                <TicketInfo label="Email" value={userBuyTicket.email} />
                <TicketInfo label="CCCD" value={userBuyTicket.cccd} />
                <TicketInfo label="Số điện thoại" value={userBuyTicket.phone} />
                <TicketInfo label="Phương thức thanh toán" value={userBuyTicket.phuongthuc} />
            </div>

            <hr style={{ margin: '0', border: '0', borderTop: '1px solid black' }} />

            <div style={{ marginLeft: '12px' }}>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#dd5600' }}>Thông tin vé mua:</p>
            </div>
            <Table dataSource={dataWithTotal} pagination={false}>
                <Column
                    title="STT"
                    dataIndex="key"
                    key="key"
                    render={(text, record) => record.key === 'Total' ? null : <span>{record.key}</span>}
                />
                <Column
                    title="Họ và tên"
                    dataIndex="name"
                    key="name"
                    render={(text, record) => record.key === 'Total' ? null : (
                        <div>
                            <p>{record.name}</p>
                            <p>Đối tượng: {record.type}</p>
                            <p>Số giấy tờ: {record.documentNumber}</p>
                        </div>
                    )}
                />
                <Column
                    title="Thông tin chỗ"
                    dataIndex="info"
                    key="info"
                    render={(text, record) => record.key === 'Total' ? null : (
                        <div>
                            <div>SP4 Đông Anh - Hà Nội</div>
                            <div>18/04/2024 04:27</div>
                            <div>Toa 1 chỗ 22</div>
                            <div>Nằm khoang 4 điều hòa T1</div>
                        </div>
                    )}
                />
                <Column
                    title="Giá vé"
                    dataIndex="price"
                    key="price"
                />
                <Column
                    title="Khuyến mãi"
                    dataIndex="tags"
                    key="tags"
                    render={(text, record) => record.key === 'Total' ? <span style={{ fontWeight: 'bold' }}>{record.key}</span> : <span>{record.tags}</span>}
                />
                <Column
                    title="Thành tiền"
                    dataIndex="total"
                    key="total"
                    render={(text, record) => record.key === 'Total' ? <span style={{ fontWeight: 'bold' }}>{parseFloat(record.total).toLocaleString('en-US')}</span> : <span>{parseFloat(record.total).toLocaleString('en-US')}</span>}
                />
            </Table>
            
            <div style={{ marginLeft: '12px' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#dd5600' }}>Quý khách vui lòng kiểm tra kỹ và xác nhận các thông tin đã nhập trước khi thực hiện giao dịch mua vé. Sau khi thực hiện giao dịch thanh toán ở trang tiếp theo quý khách sẽ không thể thay đổi được thông tin mua vé trên.</p>
            </div>
        </div>
    );
};

Content2.propTypes = {
    dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
    userBuyTicket: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        cccd: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        phuongthuc: PropTypes.string.isRequired,
    }).isRequired,
};


export default Content2;
