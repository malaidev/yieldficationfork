import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomButton from './Button';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { TbArrowBigTop, TbArrowBigDown } from 'react-icons/tb';
import '../scss/sidebar.scss';
import empty from '../assets/empty.svg';
import btc from '../assets/BTC.png';
import change from '../assets/return.png';
import SwitchToggle from './SwitchToggle';

const Sidebar = () => {
    const [sidebarTab, setSidebarTab] = useState(false);
    const [rangeVal, setRangeVal] = useState(0);
    const [triggerFlag, setTriggerFlag] = useState(false);
    let location = useLocation();

    useEffect(() => {
        if (location.pathname == '/perpetual' || location.pathname == '/leaderboard') {
            setSidebarTab(true);
        } else {
            setSidebarTab(false);
        }
    }, [location])

    const getRangeVal = (e) => {
        setRangeVal(e.target.value);
    }

    const handleTrigger = () => {
        setTriggerFlag(!triggerFlag);
    }

    return (
        <div className="sidebar">
            <h5 className="py-3 ps-2 text-start">Welcome, ...</h5>
            <div className="my-3 sidebar-portfolio">
                <div className="d-flex flex-column text-start pt-1 gap-1">
                    <span className="d-flex justify-content-between">
                        My Portfolio
                        <b className="d-flex justify-content-center align-items-center"> ? </b>
                    </span>
                    <h2 className="fw-bold mb-0">$0.00</h2>
                    <small>0 HAVEN</small>
                </div>
                <CustomButton className="mt-4 py-2 w-100">Buy HAVEN on Uniswap</CustomButton>
            </div>
            {
                !sidebarTab ? 
                <>
                    <h5 className="py-3 ps-2 text-start">Staking ETH Rewards</h5>
                    <div className="staking-item rounded-4 d-flex flex-column gap-2 align-items-start mb-4">
                        <span className="text-gray-500">Your Overall Rewards</span>
                        <div className="fs-4 d-flex gap-4 align-items-center">
                            <b className="fw-bold">0.0000 ETH</b>
                            <small>($0.00)</small>
                        </div>
                    </div>
                    <div className="staking-item rounded-4 d-flex flex-column gap-2 align-items-start mb-4">
                        <span className="text-gray-500">Your Unclaimed Rewards</span>
                        <div className="fs-4 d-flex gap-4 align-items-center">
                            <b className="fw-bold">0.0000 ETH</b>
                            <small>($0.00)</small>
                        </div>
                    </div>
                    <div className="staking-item rounded-4 d-flex flex-column gap-2 align-items-start mb-4">
                        <span className="text-gray-500">Total Aggregate Rewards</span>
                        <div className="fs-4 d-flex gap-4 align-items-center">
                            <b className="fw-bold">264.7710 ETH</b>
                            <small>($335,22.89)</small>
                        </div>
                    </div>
                    <h5 className="py-3 ps-2 d-flex align-items-center justify-content-between">
                        My Latest Stake
                        <Link className="text-gray-500 fs-6 btn">See All NFTs</Link>
                    </h5>
                    <div className="d-flex flex-column align-items-center py-3 gap-3">
                        <img src={empty} width="230"/>
                        <p className="text-gray-500 fs-5">You have no stakes yet.</p>
                        <Link to=""><CustomButton className="px-4 py-2">Stake Today!</CustomButton></Link>
                    </div>
                </>
                :
                <>
                    <h5 className="py-3 ps-2 text-start">Open Position</h5>
                    <div className="d-flex flex-column align-items-center open-position rounded-4 position-relative">
                        <img src={btc} width="150" className="mx-auto"/>
                        <img src={change} width="35" className="position-absolute green-filter"/>
                        <button> Change Position Asset/Index </button>
                    </div>
                    <h5 className="pt-5 pb-3 ps-2 text-start">Type</h5>
                    <div className='d-flex justify-content-between type-area gap-2'>
                        <button className='active d-flex gap-1 align-items-center justify-content-center fw-bold py-2'><TbArrowBigTop />Long</button>
                        <button className='d-flex gap-1 align-items-center justify-content-center fw-bold py-2'><TbArrowBigDown />Short</button>
                    </div>
                    <h5 className="pt-5 pb-3 ps-2 text-start">Size</h5>
                    <div className="d-flex flex-column">
                        <div className="collateral-token d-flex flex-column gap-2 rounded-4 p-3">
                            <div className='d-flex fs-5 gap-2'>
                                <label>PAY</label>
                                <input type="text" className="bg-transparent text-start fw-bold" placeholder="0" />
                                <b className="bg-gradient-txt bg-clip-text">HAVEN</b>
                            </div>
                            <div className='d-flex justify-content-start'>
                                <b className="me-1"> Bal: NaN ($NaN) </b>
                                <button className="fw-bold bg-gradient-txt bg-clip-text border-0"> MAX </button>
                            </div>
                            <CustomButton className="py-2">Change Collateral Token</CustomButton>
                        </div>
                        <div className='leverage-preview  d-flex flex-column gap-2 rounded-4 p-3 mt-3'>
                            <div className='d-flex fs-5 gap-2'>
                                <label>LONG</label>
                                <input type="text" className="bg-transparent text-start fw-bold" placeholder="0" />
                                <b className="bg-gradient-txt bg-clip-text">HAVEN</b>
                            </div>
                            <div className='d-flex justify-content-start'>
                                <b className="me-1"> Leverage: 5x </b>
                            </div>
                        </div>
                    </div>
                    <h5 className="pt-5 pb-3 ps-2 text-start">Leverage</h5>
                    <div className="d-flex flex-column rounded-4 py-1 px-3 leverage-controll">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1 className="fs-4 fw-bold">2x</h1>
                            <div className='d-flex ctrl-item'>
                                <button className="active">2x</button>
                                <button>5x</button>
                                <button>10x</button>
                                <button>20x</button>
                                <button>50x</button>
                            </div>
                        </div>
                        <div className="w-100">
                            <input type="range" onChange={getRangeVal} value={rangeVal} min="0" max="100" style={{WebkitBackgroundSize:`${rangeVal}%, 100%`}} />
                        </div>
                    </div>
                    <div className='index-price d-flex flex-column p-3 rounded-4 my-4'>
                        <div className='d-flex justify-content-between w-100'>
                            <label className="fw-semibold">Add Trigger Order (TP/SL)</label>
                            <SwitchToggle className="" onClick={handleTrigger} />
                        </div>
                        {
                            triggerFlag &&
                            <>
                                    <div className="price-preview position-relative text-start rounded-3 d-flex align-items-center my-3">
                                        <button type="button" tabIndex="-1" disabled=""></button>
                                        <p className="w-100 text-center fs-4 py-1 px-2 m-0">0</p>
                                        <button type="button" tabIndex="-1" disabled="" ></button>
                                    </div>
                                    <ButtonGroup className="mb-3" size="sm">
                                        <Button className="active">50%</Button>
                                        <Button className="">60%</Button>
                                        <Button className="">75%</Button>
                                        <Button className="">105%</Button>
                                        <Button className="">200%</Button>
                                    </ButtonGroup>
                                    <div className="price-detail d-flex flex-column align-items-start gap-3">
                                        <span className="text-start text-serif text-gray-300">Current index price: $19,257.25</span>
                                        <span className="text-start text-serif text-gray-300">-50.00% index price movement downwards from open</span>
                                        <span className="text-start text-serif text-gray-300">Collateral: 0 HAVEN</span>
                                        <span className="text-start text-serif text-gray-300">Value at close: 0.00 HAVEN (+0.00)</span>
                                    </div>
                            </>
                        }
                    </div>
                    <CustomButton className="w-100 max-collateral-btn">Max Collateral Reached</CustomButton>
                    <div className="long-info mb-5">
                        <h5 className="pt-5 pb-3 ps-2 text-start">Long Info</h5>
                        <div className="d-flex flex-column p-3 rounded-4">
                            <span className="text-start text-serif text-gray-300 text-serif">Collateral</span>
                            <div className="d-flex justify-content-between border-0">
                                <span className="text-start text-serif text-gray-300 text-serif">Index Entry Price</span>
                                <span className="text-start fw-bold">$19,257.25</span>
                            </div>
                            <div className="d-flex justify-content-between border-0">
                                <span className="text-start text-serif text-gray-300 text-serif">Index Liq. Price</span>
                                <span className="text-start fw-bold">$1,925.73</span>
                            </div>
                            <div className="d-flex justify-content-between border-0">
                                <span className="text-start text-serif text-gray-300 text-serif">Leverage</span>
                                <span className="text-start fw-bold">1x</span>
                            </div>
                            <div className="d-flex justify-content-between border-0">
                                <span className="text-start text-serif text-gray-300 text-serif">Pay</span>
                                <span className="text-start fw-bold">0<small className="fw-semibold">($0.00)</small></span>
                            </div>
                            <div className="d-flex justify-content-between border-0">
                                <span className="text-start text-serif text-gray-300 text-serif">Long</span>
                                <span className="text-start fw-bold">0<small className="fw-semibold">($0.00)</small></span>
                            </div>
                            <div className="d-flex justify-content-between border-0">
                                <span className="text-start text-serif text-gray-300 text-serif">Open Fee</span>
                                <span className="text-start fw-bold">0.00</span>
                            </div>
                            <div className="d-flex justify-content-between border-0">
                                <span className="text-start text-serif text-gray-300 text-serif">Borrow Fee</span>
                                <span className="text-start fw-bold">0 / hr.</span>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
export default Sidebar;