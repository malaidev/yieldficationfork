import { useState, useEffect, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsApple } from 'react-icons/bs'
import rank1 from '../assets/rank-1.svg';
import rank2 from '../assets/rank-2.svg';
import rank3 from '../assets/rank-3.svg';
import token from '../assets/token.png';
import etherscan from '../assets/etherscan.png';
import '../scss/traderItem.scss';
const TraderItem = (props) => {
    const { data, dataKey } = props;
    useEffect(() => {
    }, [])
    return (
        <Row className="leaderboards-lank m-0">
            <Col lg={5} md={12} sm={12} className="d-flex align-items-center gap-5">
                <div className="d-flex flex-column align-items-center">
                    {
                        dataKey < 3 ?
                            <img src={dataKey==0?rank1:dataKey==1?rank2:rank3} width="50"/>
                        :
                            <h2 className='text-gray-300 fw-bold'>{dataKey+1}</h2>
                    }
                    <small className="text-gray-300">Rank</small>
                </div>
                <div className='d-flex align-items-center gap-3 py-2 px-3 rounded-3 bg-gray-500'>
                    <img src={token} width="50"/>
                    <span class="fs-5 fw-semibold">0x7066...a36D</span>
                    <Link target={'_blank'} to="https://etherscan.io/address/0x706621AE65B78886041303b712B912F8c912a36D"><img src={etherscan} width="20"/></Link>
                </div>
            </Col>
            <Col lg={7} md={12} sm={12} className="d-flex trader-item gap-2">
                <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3 py-2">
                    <small className="m-0 text-gray-300">Trades</small>
                    <b>12</b>
                </div>
                <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3 py-2">
                    <small className="m-0 text-gray-300">PNL</small>
                    <b>$33,977.26</b>
                </div>
                <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3 py-2">
                    <small className="m-0 text-gray-300">Volume</small>
                    <b>$3,581,933.10</b>
                </div>
            </Col>
        </Row>
    )
}
export default TraderItem;