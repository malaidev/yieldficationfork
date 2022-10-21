
import { useState, useEffect, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillExclamationDiamondFill, BsApple } from 'react-icons/bs'
import { getConstData } from '../utils/getConstData';
import { MenuContext } from '../context/MenuConnectContext';
import vesting from '../assets/lock.png';
import gear from '../assets/greenGear.png'
import rank1 from '../assets/rank-1.svg';
import rank2 from '../assets/rank-2.svg';
import rank3 from '../assets/rank-3.svg';
import token from '../assets/token.png';
import TraderItem from '../components/TraderItem';
import '../scss/perpstat.scss';

const PerpsStats = () => {
    const [warnTxt, setWarnTxt] = useState("")
    const {title, setTitle} = useContext(MenuContext);
    const traders = [
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
        {address: "0x706621AE65B78886041303b712B912F8c912a36D", trades: "12", pnl: "$33,977", Volume: "$3,581"},
    ]
    useEffect(() => {
        setWarnTxt(getConstData("warn"));
        setTitle('Perps Stats');
    }, [])

    return (
        <div className="stats-content py-5 px-4">
            <div className="net-warn fs-5 mb-4 py-3 px-2 gap-3 d-flex align-items-center justify-content-start">
                <BsFillExclamationDiamondFill />
                {warnTxt}
            </div>
            <div className="mb-3">
                <h5 className="text-start">Global Trading Stats (Starting Sept. 29)</h5>
                <Row className='mt-3 text-serif'>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$36,984,396.90</h4>
                            <p className="">Total Volume (position size)</p>  
                            <img className="bg-img-opacity green-filter" width="200" height="110" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$2,606,515.16</h4>
                            <p className="">24hr Volume (position size)</p>  
                            <img className="bg-img-opacity green-filter" width="200" height="110" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$99,253.94</h4>
                            <p className="">Total Fees</p>  
                            <img className="bg-img-opacity green-filter" width="200" height="110" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$3,309.22</h4>
                            <p className="">24hr Fees</p>  
                            <img className="bg-img-opacity green-filter" width="200" height="110" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$38,927.46</h4>
                            <p className="">Total Platform PNL</p>  
                            <img className="bg-img-opacity green-filter" width="200" height="110" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$7,016.05</h4>
                            <p className="">24hr Platform PNL</p>  
                            <img className="bg-img-opacity green-filter" width="200" height="110" src={vesting} />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="d-flex justify-content-between mt-5 mb-3">
                <h1 className='fs-5'>Top Traders</h1>
                <div className="d-flex gap-3 trader-control">
                    <input type="text" className="rounded-3 px-3 py-1 fs-5 text-white" placeholder='Search address...'/>
                    <button className="border-0"><img src={gear} width="60"/></button>
                </div>
            </div>
            <div className="rounded-4 flex-column traders">
                {
                    traders.map((item, index) => {
                        return (
                            <TraderItem data={item} key={index} dataKey={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default PerpsStats;