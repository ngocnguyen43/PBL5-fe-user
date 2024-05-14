import { Button, Input, Radio, Select, Space, Table } from 'antd';
import PropTypes from 'prop-types';

import { ShoppingCartOutlined, UserOutlined, DollarOutlined  } from '@ant-design/icons';
import { CustomRadioGroup, InfoCart, InfoUser, InputMember, NameUser, PNameUser, User } from './style';

const { Column } = Table;
const { Option } = Select;

const Content1 = ({ dataSource, handleInputChange, handleBuyTicketChange, handleDelete, handleInputValidation }) => {

    // const [paymentMethod, setPaymentMethod] = useState(1);

    // const onChangePaymentMethod = (e) => {
    //     setPaymentMethod(parseInt(e.target.value));
    // };
    // const updateDataSource = (newDataSource) => {
    //     handleDataSourceChange(newDataSource);
    // };

    const validateInput = (value, dataIndex) => {
        // Kiểm tra dữ liệu có rỗng không
        if (!value.trim()) {
            handleInputValidation(false); // Gửi kết quả validate về
            return;
        }
    
        // Kiểm tra định dạng email
        if (dataIndex === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                handleInputValidation(false); // Gửi kết quả validate về
                return;
            }
        }
    
        // Kiểm tra số điện thoại có đúng định dạng không (10 ký tự)
        if (dataIndex === 'phone') {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(value)) {
                handleInputValidation(false); // Gửi kết quả validate về
                return;
            }
        }
    
        // Nếu dữ liệu hợp lệ, gửi kết quả validate về
        handleInputValidation(true);
    };

    return (
        <div style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '20px' }}>
            <InfoCart>
                <ShoppingCartOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px' }} />
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px' }}>Thông tin giỏ vé</p>
            </InfoCart>
            <Table dataSource={dataSource} pagination={false}>
                <Column
                title="Họ và tên"
                dataIndex="name"
                key="name"
                width="25%"
                render={(text, record) => (
                    <div>
                        <Input
                            style={{ marginBottom: '8px', width: '100%' }}
                            value={record.name}
                            onChange={(e) => handleInputChange(e.target.value, record.key, 'name')}
                            placeholder="Họ và tên"
                        />
                        <Select
                            style={{ marginBottom: '8px', width: '100%' }}
                            value={record.type}
                            onChange={(value) => handleInputChange(value, record.key, 'type')}
                            placeholder="Đối tượng"
                        >
                            <Option value="nguoiLon">Người lớn</Option>
                            <Option value="treEm">Trẻ em</Option>
                            <Option value="emBe">Em bé</Option>
                        </Select>
                        <Input
                            style={{ marginBottom: '8px', width: '100%' }}
                            value={record.documentNumber}
                            onChange={(e) => handleInputChange(e.target.value, record.key, 'documentNumber')}
                            placeholder="Số giấy tờ"
                        />
                    </div>
                )}
                />
                <Column
                    title="Thông tin chỗ"
                    dataIndex="info"
                    key="info"
                    // render={(text, record) => (
                    render={() => (
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
                    // render={(text, record) => (
                    render={() => (
                        <div>75000</div>
                    )}
                />
                <Column
                    title="Khuyến mãi"
                    dataIndex="tags"
                    key="tags"
                    render={() => (
                        <div>Không có khuyến mại cho vé này</div>
                    )}
                />
                <Column
                    title="Thành tiền"
                    dataIndex="total"
                    key="total"
                    render={() => (
                        <div>75000</div>
                    )}
                />
                <Column
                    title="Xóa"
                    dataIndex="operation"
                    render={(record) =>
                        dataSource.length >= 1 ? (
                            <Button onClick={() => handleDelete(record.key)}>Xóa</Button>
                        ) : null
                    }
                />
            </Table>
        <InfoUser>
            <InfoCart style={{ width: '230px' }}>
                <UserOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px', color: 'red' }} />
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', color: 'red' }}>Thông tin người đặt vé</p>
            </InfoCart>
            <p style={{ fontSize: '15px' }}>Quý khách vui lòng điền đẩy đủ và chính xác các thông tin về người mua vé dưới đây. Các thông tin này sẽ được sử dụng để xác minh người mua vé và lấy vé tại ga trước khi lên tàu theo đúng các quy định của Tổng công ty Đường sắt Việt Nam.</p>
            <User>
                <NameUser>
                    <PNameUser>Họ và tên</PNameUser>
                    <div style={{ position: 'relative' }}>
                        <Input
                            name='username'
                            placeholder="Họ và tên"
                            style={InputMember}
                            onChange={(e) => handleBuyTicketChange('username', e.target.value)}
                            onBlur={(e) => validateInput(e.target.value, '', 'username')}
                        />
                    </div>
                </NameUser>
                <NameUser>
                    <PNameUser>Email</PNameUser>
                    <div style={{ position: 'relative' }}>
                        <Input
                            name='email'
                            placeholder="Email"
                            style={InputMember}
                            onChange={(e) => handleBuyTicketChange('email', e.target.value)}
                            onBlur={(e) => validateInput(e.target.value, '', 'email')}
                        />
                    </div>
                </NameUser>
                <NameUser>
                    <PNameUser>Số CMND/CCCD</PNameUser>
                    <div style={{ position: 'relative' }}>
                        <Input
                            name='cccd'
                            placeholder="Số CMND/CCCD"
                            style={InputMember}
                            onChange={(e) => handleBuyTicketChange('cccd', e.target.value)}
                            onBlur={(e) => validateInput(e.target.value, '', 'cccd')}
                        />
                    </div>
                </NameUser>
                <NameUser>
                    <PNameUser>Số điện thoại</PNameUser>
                    <div style={{ position: 'relative' }}>
                        <Input
                            name='phone'
                            placeholder="Số điện thoại"
                            style={InputMember}
                            onChange={(e) => handleBuyTicketChange('phone', e.target.value)}
                            onBlur={(e) => validateInput(e.target.value, '', 'phone')}
                        />
                    </div>
                </NameUser>
            </User>
        </InfoUser>
        <InfoUser>
            <InfoCart style={{ width: '230px' }}>
                <DollarOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px', color: 'red' }} />
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', color: 'red' }}>Phương thức thanh toán</p>
            </InfoCart>
            <CustomRadioGroup 
                onChange={(e) => handleBuyTicketChange('phuongthuc', e.target.value)}
                // onChange={onChangePaymentMethod} value={paymentMethod}
                >
                <Space direction="vertical">
                    {/* <Radio value={1} >Thanh toán trả sau bằng tiền mặt, internet banking tại các điểm giao dịch: tại các nhà ga, các điểm bưu cục VNPost, ngân hàng VIB, Payoo, Internet Banking</Radio>
                    <Radio value={2}>Chuyển khoản</Radio> */}
                    
                    <Radio value={"Thanh toán trả sau bằng tiền mặt"} >Thanh toán trả sau bằng tiền mặt, internet banking tại các điểm giao dịch: tại các nhà ga, các điểm bưu cục VNPost, ngân hàng VIB, Payoo, Internet Banking</Radio>
                    <Radio value={"Chuyển khoản"}>Chuyển khoản</Radio>
                </Space>
            </CustomRadioGroup>
        </InfoUser>
    </div>
    );
};
Content1.propTypes = {
    dataSource: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBuyTicketChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleDataSourceChange: PropTypes.func.isRequired,
    handleInputValidation: PropTypes.func.isRequired,
};
export default Content1;
