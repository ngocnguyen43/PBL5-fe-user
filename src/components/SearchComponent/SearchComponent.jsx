// import React, { useState } from "react";
// import { ShoppingCartOutlined, DeleteOutlined, AntCloudOutlined } from '@ant-design/icons';
// import { DatePicker, Button, List } from 'antd';
// import { BuyTicket, FlexContainer, InnerDivStyle, MainContainerStyle, StyledDiv, StyledDiv2, WrapBorder} from "./style";
// import { useNavigate } from "react-router-dom";
// import bgFb from '../../assets/images/bg_full.jpg';
// import WrapComponent from '../WrapComponent/WrapComponent'
// import TrainComponent from '../TrainComponent/TrainComponent'
// import HorizontalScrollList from '../ListComponent/ListComponent'

// const SearchComponent = () => {
//     const navigate = useNavigate();
//     const [selectedTrainId, setSelectedTrainId] = useState(null);

//     const [selectedTrainItems, setSelectedTrainItems] = useState(null);
//     const [lastClickedTrainId, setLastClickedTrainId] = useState(null);
//     const [selectedTrainValue, setSelectedTrainValue] = useState(null);

//     const [selectedSeat, setSelectedSeat] = useState(null);
//     const [selectedCarr, setSelectedCarr] = useState(null);

//     const handleBuy = () => {
//         navigate('/buyticket');
//     }

//     const trainList = [
//         { id: 1, totalItems: 100, timeIn: '03/05 6:10', timeOut: '03/05 14:20', code: 'abcd', totalBookedSeats: '40', totalAvailableSeats: '60' },
//         { id: 2, totalItems: 120, timeIn: '04/05 6:20', timeOut: '03/05 14:20', code: 'dhfj', totalBookedSeats: '30', totalAvailableSeats: '120' },
//         { id: 3, totalItems: 130, timeIn: '05/05 6:30', timeOut: '03/05 14:20', code: 'oeir', totalBookedSeats: '44', totalAvailableSeats: '80' },
//         { id: 4, totalItems: 150, timeIn: '06/05 6:40', timeOut: '03/05 14:20', code: 'qwor', totalBookedSeats: '87', totalAvailableSeats: '24' },
//         { id: 5, totalItems: 80, timeIn: '07/05 6:50', timeOut: '03/05 14:20', code: 'pgidm', totalBookedSeats: '80', totalAvailableSeats: '13' }
//     ];

//     const handleTrainSelect = (trainId, totalItems) => {
//         setSelectedTrainId(trainId);
//         setSelectedTrainValue(trainList[trainId-1]);
//         setSelectedTrainItems(totalItems);
//         setLastClickedTrainId(trainId); // Cập nhật ID của TrainComponent cuối cùng được click
//     }

//     const [selectedButtonPosition, setSelectedButtonPosition] = useState(null);

//     const handleButtonSelect = (position) => {
//     setSelectedButtonPosition(position);
//     };

//     return (
//         <div style={{ backgroundImage: `url(${bgFb})`}}>
//             <MainContainerStyle>
//                 <List
//                     style={{ overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap' }}
//                     dataSource={trainList} // Change data to trainList
//                     renderItem={train => (
//                         <List.Item style={{ display: 'inline-block', width: '200px' }}>
//                             <TrainComponent
//                                 key={train.id}
//                                 id={train.id}
//                                 value={train}
//                                 totalItems={train.totalItems}
//                                 onSelect={handleTrainSelect}
//                                 isSelected={selectedTrainId === train.id}
//                                 disabled={lastClickedTrainId !== null && lastClickedTrainId !== train.id}
//                             />
//                         </List.Item>
//                     )}
//                 />
//                 <WrapBorder style={{display: 'flex', position: 'absolute', marginLeft: '30px'}}>
//                     <WrapComponent 
//                         selectedTrainId={selectedTrainId} 
//                         totalItems={selectedTrainItems}
//                         onSelect={handleButtonSelect}
//                     ></WrapComponent>
//                 </WrapBorder>
//             </MainContainerStyle>
//             <StyledDiv>
//                 <ShoppingCartOutlined style={{ fontSize: '20px' }} />
//                 <span style={{ fontSize: '16px' }}>Giỏ vé</span>
//             </StyledDiv>
//             <StyledDiv2>
//                 <FlexContainer>
//                     <AntCloudOutlined 
//                         style={{ fontSize: '25px' }} 
//                     />
//                         <p style={{ margin: '0 10px', fontSize: '16px', flexGrow: 1 }}>
//                             <br /> {selectedTrainValue && selectedTrainValue.code} - DAD -> HAN <br />
//                             {selectedTrainValue && selectedTrainValue.timeIn} <br />
//                              - Toa {selectedButtonPosition} 
//                              - Chỗ {selectedButtonPosition} <br />
//                         </p>
//                     <DeleteOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
//                 </FlexContainer>
//                 <BuyTicket onClick={handleBuy}>Mua vé</BuyTicket>
//             </StyledDiv2>

//         </div>
//     );
// };

// export default SearchComponent;










//                 {/* <InnerDivStyle>
//                     <div style={{display: 'flex', flexWrap: 'wrap', gap: '70px'}}>
//                         {trainList.map(train => (
//                             <TrainComponent
//                                 key={train.id}
//                                 id={train.id}
//                                 totalItems={train.totalItems}
//                                 onSelect={handleTrainSelect}
//                                 isSelected={selectedTrainId === train.id}
//                                 disabled={lastClickedTrainId !== null && lastClickedTrainId !== train.id}
//                             />
//                         ))}

//                     </div>
//                 </InnerDivStyle> */}




import { useState } from "react";
import { ShoppingCartOutlined, DeleteOutlined, AntCloudOutlined } from '@ant-design/icons';
import { List } from 'antd';
import { BuyTicket, FlexContainer, MainContainerStyle, StyledDiv, StyledDiv2, WrapBorder } from "./style";
import { useNavigate } from "react-router-dom";
import bgFb from '../../assets/images/bg_full.jpg';
import WrapComponent from '../WrapComponent/WrapComponent';
import TrainComponent from '../TrainComponent/TrainComponent';

const SearchComponent = () => {
    const navigate = useNavigate();
    const [selectedTrainId, setSelectedTrainId] = useState(null);
    const [selectedTrainItems, setSelectedTrainItems] = useState(null);


    const [lastClickedTrainId, setLastClickedTrainId] = useState(null);
    const [selectedTrainValue, setSelectedTrainValue] = useState(null);
    const [clickedButtonsData, setClickedButtonsData] = useState([]);


        
    const handleBuy = () => {
        navigate('/buyticket');
    }

    const trainList = [
        { id: 1, totalItems: 100, timeIn: '03/05 6:10', timeOut: '03/05 14:20', code: 'abcd', totalBookedSeats: '40', totalAvailableSeats: '60' },
        { id: 2, totalItems: 120, timeIn: '04/05 6:20', timeOut: '03/05 14:20', code: 'dhfj', totalBookedSeats: '30', totalAvailableSeats: '120' },
        { id: 3, totalItems: 130, timeIn: '05/05 6:30', timeOut: '03/05 14:20', code: 'oeir', totalBookedSeats: '44', totalAvailableSeats: '80' },
        { id: 4, totalItems: 150, timeIn: '06/05 6:40', timeOut: '03/05 14:20', code: 'qwor', totalBookedSeats: '87', totalAvailableSeats: '24' },
        { id: 5, totalItems: 80, timeIn: '07/05 6:50', timeOut: '03/05 14:20', code: 'pgidm', totalBookedSeats: '80', totalAvailableSeats: '13' }
    ];
    

    const handleTrainSelect = (trainId, totalItems) => {
        setSelectedTrainId(trainId);
        setSelectedTrainValue(trainList[trainId - 1]);
        setSelectedTrainItems(totalItems);

        setLastClickedTrainId(trainId);
    }

    const handleButtonSelect = (position, carr) => {
        const selectedTrainCode = selectedTrainValue ? selectedTrainValue.code : null;
        const selectedTrainTimeIn = selectedTrainValue ? selectedTrainValue.timeIn : null;
        const selectedTrainCarr = carr; 
        const newButtonData = { position, selectedTrainCode, selectedTrainTimeIn, selectedTrainCarr };
        
        // Kiểm tra xem đã tồn tại button với thông tin tương tự chưa
        const existingIndex = clickedButtonsData.findIndex(button => button.position === position && button.selectedTrainCode === selectedTrainCode && button.selectedTrainCarr === selectedTrainCarr);
        
        if (existingIndex === -1) {
            // Nếu chưa tồn tại, thêm mới vào mảng clickedButtonsData
            setClickedButtonsData([...clickedButtonsData, newButtonData]);
        } else {
            // Nếu đã tồn tại, loại bỏ khỏi mảng clickedButtonsData
            const newClickedButtonsData = clickedButtonsData.filter(button => button.position !== position || button.selectedTrainCode !== selectedTrainCode || button.selectedTrainCarr !== selectedTrainCarr);
            setClickedButtonsData(newClickedButtonsData);

        }
    };
    

    const handleDeleteFlexContainer = (position, selectedTrainCarr, selectedTrainCode) => {
        // Loại bỏ FlexContainer tương ứng từ mảng clickedButtonsData
        const newClickedButtonsData = clickedButtonsData.filter(button => button.position !== position || button.selectedTrainCode !== selectedTrainCode || button.selectedTrainCarr !== selectedTrainCarr);
        setClickedButtonsData(newClickedButtonsData);
    };


    return (
        <div style={{ backgroundImage: `url(${bgFb})` }}>
            <MainContainerStyle>
                <List
                    style={{ overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap' }}
                    dataSource={trainList}
                    renderItem={train => (
                        <List.Item style={{ display: 'inline-block', width: '200px' }}>
                            <TrainComponent
                                key={train.id}
                                id={train.id}
                                value={train}
                                totalItems={train.totalItems}
                                onSelect={handleTrainSelect}
                                isSelected={selectedTrainId === train.id}
                                disabled={lastClickedTrainId !== null && lastClickedTrainId !== train.id}
                            />
                        </List.Item>
                    )}
                />
                <WrapBorder style={{ display: 'flex', position: 'absolute', marginLeft: '30px' }}>
                    <WrapComponent
                        selectedTrainId={selectedTrainId}
                        totalItems={selectedTrainItems}
                        onSelect={handleButtonSelect}
                    ></WrapComponent>
                </WrapBorder>
            </MainContainerStyle>
            <StyledDiv>
                <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                <span style={{ fontSize: '16px' }}>Giỏ vé</span>
            </StyledDiv>
            <StyledDiv2>
                {/* Sử dụng vòng lặp để tạo các FlexContainer tương ứng */}
                {/* {clickedButtonsData.map(({ position, selectedTrainCode, selectedTrainTimeIn, selectedTrainCarr }, index) => ( */}
                {clickedButtonsData.map(({ position, selectedTrainCode, selectedTrainTimeIn, selectedTrainCarr }) => (
                    <FlexContainer
                        key={position}
                    >
                        <AntCloudOutlined 
                            style={{ fontSize: '25px' }} 
                        />
                        <div style={{ margin: '0 10px', fontSize: '16px', flexGrow: 1 }}>
                            <p>
                                <br /> {selectedTrainCode} - DAD -to- HAN <br />
                                {selectedTrainTimeIn} <br />
                                - Toa {position} 
                                - Chỗ {selectedTrainCarr} <br />
                            </p>
                        </div>
                        <DeleteOutlined
                            style={{ fontSize: '25px', cursor: 'pointer' }}
                            onClick={() => handleDeleteFlexContainer(position, selectedTrainCarr, selectedTrainCode)}
                        />
                    </FlexContainer>
                ))}
                <BuyTicket onClick={handleBuy}>Mua vé</BuyTicket>
            </StyledDiv2>
        </div>
    );
};

export default SearchComponent;