import { useState, useEffect } from 'react';
import { IoIosWarning } from 'react-icons/io'
import { getConstData } from '../utils/getConstData';
import stake from '../assets/stake.svg';
import vesting from '../assets/vesting.svg';
import single from '../assets/single.svg';
import pair from '../assets/pair.svg';
import empty from '../assets/empty.svg';
import CustomButton from './Button';
import '../scss/dashboard.scss';
import { Col, Row } from 'react-bootstrap';
const Dashboard = () => {
    const [warnTxt, setWarnTxt] = useState("")
    const [noFoundTxt, setNoFoundTxt] = useState("")
    useEffect(() => {
        setWarnTxt(getConstData("warn"));
        setNoFoundTxt(getConstData("noFound"));
    })
    return (
        <div className="dashboard-content py-5 px-4">
            <div className="net-warn fs-5 mb-4 py-3 px-2 gap-3 d-flex align-items-center justify-content-center">
                <IoIosWarning />
                {warnTxt}
            </div>
            <div className="d-flex flex-column align-content-center gap-5">
                <div className="">
                    <h4 className="text-start">Stats</h4>
                    <div className="my-3">
                        <Row className="d-flex flex-row align-items-stretch h-100">
                            <Col lg={5} md={12} sm={12}>
                               <div className="price-effect rounded-5 d-flex flex-column align-items-center">
                                <div className="fw-bold">
                                        <h1>$0.0754</h1>
                                        <p>YDF Price</p>
                                    </div>
                                    <div className="">
                                        <h2 className='bg-gradient-txt bg-clip-text'>456,328,209</h2>
                                        <p className="fw-bold">Total Supply</p>
                                    </div>
                               </div>
                            </Col>
                            <Col lg={7} md={12} sm={12}>
                                <Row className="total-tokens justify-content-around gap-3">
                                    <Col lg={5} md={12} sm={12} className="bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                        <h4 className="fs-3 fw-bold">
                                            247,025,102
                                        </h4>
                                        <h4 className="fw-bold">(YDF)</h4>  
                                        <h6 className='fs-5'>Total YDF Staked</h6>
                                        <img className="bg-img-opacity" src={stake} />
                                    </Col>
                                    <Col lg={5} md={12} sm={12} className="bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                        <h4 className="fs-3 fw-bold">
                                            247,025,102
                                        </h4>
                                        <h4 className="fw-bold">(YDF)</h4>  
                                        <h6>Total YDF Staked</h6>
                                        <img className="bg-img-opacity" src={vesting} />
                                    </Col>
                                    <Col lg={5} md={12} sm={12} className="bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                        <h4 className="fs-3 fw-bold">
                                            247,025,102
                                        </h4>
                                        <h4 className="fw-bold">(YDF)</h4>  
                                        <h6>Total YDF Staked</h6>
                                        <img className="bg-img-opacity" src={single} />
                                    </Col>
                                    <Col lg={5} md={12} sm={12} className="bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                        <h4 className="fs-3 fw-bold">
                                            247,025,102
                                        </h4>
                                        <h4 className="fw-bold">(YDF)</h4>  
                                        <h6>Total YDF Staked</h6>
                                        <img className="bg-img-opacity" src={pair} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <h4 className="text-start">Latest Vests</h4>
                    <div className='py-5 text-gray-500'>
                        <img src={empty} width="230"/>
                        <h1 className="fw-bold text-purple-300">No Vests Found</h1>
                        <p className="fs-5">{noFoundTxt}</p>
                        <CustomButton className='py-2 px-4'>Stake Today!</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;