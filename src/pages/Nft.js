import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';
import { getConstData } from '../utils/getConstData';
import vesting from '../assets/vesting.svg';
import empty from '../assets/empty.svg';
import CustomButton from '../components/Button';
import { MenuContext } from '../context/MenuConnectContext';
import '../scss/nft.scss';

const Nft = () => {
    const [warnTxt, setWarnTxt] = useState("")
    const {title, setTitle} = useContext(MenuContext)

    useEffect(() => {
        setWarnTxt(getConstData("warn"));
        setTitle('NFT');
    }, [])

    return (
        <>
            <div className="nft-content py-5 px-4">
                <div className="net-warn fs-5 mb-4 py-3 px-2 gap-3 d-flex align-items-center justify-content-start">
                    <BsFillExclamationDiamondFill />
                    {warnTxt}
                </div>
                <div className="mb-3">
                    <h5 className="text-start">My Staked Lockup Stats (In HAVEN Value)</h5>
                    <Row className='mt-3 text-serif lockup-stak'>
                        <Col lg={6} md={6} sm={12} className="pt-3">
                            <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                <h4 className="fs-3 fw-bold m-0">0</h4>
                                <p className="">HAVEN Unlocked</p>  
                                <img className="bg-img-opacity" src={vesting} />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pt-3">
                            <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                <h4 className="fs-3 fw-bold m-0">0</h4>
                                <p className="">Locked btw. 0 & 30 days</p>  
                                <img className="bg-img-opacity" src={vesting} />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pt-3">
                            <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                <h4 className="fs-3 fw-bold m-0">0</h4>
                                <p className="">Locked btw. 30 & 120 days</p>  
                                <img className="bg-img-opacity" src={vesting} />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pt-3">
                            <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                                <h4 className="fs-3 fw-bold m-0">0</h4>
                                <p className="">Locked &#62; 120 days</p>  
                                <img className="bg-img-opacity" src={vesting} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="mt-5">
                    <div className="d-flex justify-content-between">
                        <h5 className="text-start">Staked NFTs</h5>
                        <div className="d-flex gap-3 search-reward">
                            <div className="d-flex rounded-5 search-nft align-items-center px-3">
                                <label>Search ID #</label>
                                <input type="text" />
                                <button>Search</button>
                                <button>Clear</button>
                            </div>
                            <button className="claim-all-btn rounded-5 py-2 px-4 fw-bold text-serif">Claim All Rewards</button>
                        </div>
                    </div>
                    <div className='py-5 text-gray-500'>
                        <img src={empty} width="230"/>
                        <h1 className="fw-bold text-purple-300">No Vests Found</h1>
                        <p className="fs-5">We didn't find any stake NFTs in your wallet.</p>
                        <CustomButton className='py-2 px-4'>Stake Today!</CustomButton>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nft;