import { useState, useEffect, useContext } from 'react';
import { BsFillExclamationDiamondFill } from 'react-icons/bs'
import { getConstData } from '../utils/getConstData';
import stake from '../assets/stake.svg';
import vesting from '../assets/vesting.svg';
import single from '../assets/single.svg';
import pair from '../assets/pair.svg';
import empty from '../assets/empty.svg';
import CustomButton from '../components/Button';
import { Col, Row } from 'react-bootstrap';
import { MenuContext } from '../context/MenuConnectContext';
import '../scss/dashboard.scss';

const Dashboard = (props) => {
    const [warnTxt, setWarnTxt] = useState("")
    const [noFoundTxt, setNoFoundTxt] = useState("")
    const {title, setTitle} = useContext(MenuContext);

    useEffect(() => {
        setWarnTxt(getConstData("warn"));
        setNoFoundTxt(getConstData("noFound"));
        setTitle('Dashboard');
    }, [])

    return (
        <div className="dashboard-content py-5 px-4">
            <div className="net-warn fs-5 mb-4 py-3 px-2 gap-3 d-flex align-items-center justify-content-start">
                <BsFillExclamationDiamondFill />
                {warnTxt}
            </div>
            <div className="d-flex flex-column align-content-center gap-5">
                <div className="">
                    <h4 className="text-start">Stats</h4>
                    <div className="my-3">
                        <Row className="d-flex flex-row align-items-stretch h-100">
                            <Col lg={5} md={12} sm={12} className="mb-3">
                               <div className="price-effect rounded-5 d-flex flex-column align-items-center">
                                <div className="fw-bold">
                                        <h1>$0.0754</h1>
                                        <p>HAVEN Price</p>
                                    </div>
                                    <div className="">
                                        <h2 className='bg-gradient-txt bg-clip-text'>456,328,209</h2>
                                        <p className="fw-bold">Total Supply</p>
                                    </div>
                               </div>
                            </Col>
                            <Col lg={7} md={12} sm={12}>
                                <Row className="total-tokens justify-content-around text-serif gap-3">
                                    <Col lg={5} md={12} sm={12} className="bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                        <h4 className="fs-3 fw-bold">
                                            247,025,102
                                        </h4>
                                        <h4 className="fw-bold">(HAVEN)</h4>  
                                        <h6 className='fs-5'>Total HAVEN Staked</h6>
                                        <img className="bg-img-opacity" src={stake} />
                                    </Col>
                                    <Col lg={5} md={12} sm={12} className="bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                        <h4 className="fs-3 fw-bold">
                                            34,049,277
                                        </h4>
                                        <h4 className="fw-bold">(HAVEN)</h4>  
                                        <h6>Total Yield Vesting</h6>
                                        <img className="bg-img-opacity" src={vesting} />
                                    </Col>
                                    <Col lg={5} md={12} sm={12} className="bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                        <h4 className="fs-3 fw-bold">
                                            1,281
                                        </h4>
                                        <h4 className="fw-bold">(sHAVEN)</h4>  
                                        <h6>Total Single Sided NFTs</h6>
                                        <img className="bg-img-opacity" src={single} />
                                    </Col>
                                    <Col lg={5} md={12} sm={12} className="bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                        <h4 className="fs-3 fw-bold">
                                            184
                                        </h4>
                                        <h4 className="fw-bold">(slHAVEN)</h4>  
                                        <h6>Total LP NFTs</h6>
                                        <img className="bg-img-opacity" src={pair} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <h4 className="text-start">Platform Revenue</h4>
                    <Row className='mt-3 text-serif'>
                        <Col lg={6} md={6} sm={12} className="pt-3">
                            <div className="wrap-anywhere bg-gradient-to-r px-5 py-3 rounded-4 text-start">
                                <h1 className="fs-3 fw-bold">$26,873,162,71</h1>
                                <h6 className="fw-thin">Annual Yield Emissions</h6>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pt-3">
                            <div className="wrap-anywhere bg-gradient-to-r px-5 py-3 rounded-4 text-start">
                                <h1 className="fs-3 fw-bold">$3,163.18</h1>
                                <h6 className="fw-thin">Daily Avg Revenue</h6>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pt-3">
                            <div className="wrap-anywhere bg-gradient-to-r px-5 py-3 rounded-4 text-start">
                                <h1 className="fs-3 fw-bold">$1,154,559.66</h1>
                                <h6 className="fw-thin">Annual Normalized Revenue</h6>
                            </div>
                        </Col>
                    </Row>
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