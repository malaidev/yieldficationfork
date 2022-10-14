import { Link } from 'react-router-dom';
import CustomButton from './Button';
import { Button } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import '../scss/sidebar.scss';
import empty from '../assets/empty.svg';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h5 className="py-3 ps-2 text-start">Welcome, ...</h5>
            <div className="my-3 sidebar-portfolio">
                <div className="d-flex flex-column text-start pt-1 gap-1">
                    <span className="d-flex justify-content-between">
                        My Portfolio
                        <FaQuestionCircle />
                    </span>
                    <h2 className="fw-bold mb-0">$0.00</h2>
                    <small>0 YDF</small>
                </div>
                <CustomButton className="mt-4 py-2 w-100">Buy YDF on Uniswap</CustomButton>
            </div>
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
                    <small>($335,022.89)</small>
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
        </div>
    )
}
export default Sidebar;