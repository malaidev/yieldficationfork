import { useState, useEffect, useContext } from 'react';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';
import { AiFillWarning } from 'react-icons/ai';
import { getConstData } from '../utils/getConstData';
import { MenuContext } from '../context/MenuConnectContext';
import emptyPosition from '../assets/empty-positions.svg';
import btc from '../assets/btc-logo.png';
import '../scss/perpetual.scss';
const Perpetual = () => {
    const [warnTxt, setWarnTxt] = useState("")
    const [tradingViewUrl, setTradingViewUrl] = useState("")
    const {title, setTitle} = useContext(MenuContext);

    useEffect(() => {
        setWarnTxt(getConstData("warn"));
        setTradingViewUrl(getConstData("tradingViewUrl"));
        setTitle('Perpetual Futures Trading');
    }, [])
    return (
        <div className="perpetual-content py-5 px-4">
            <div className="net-warn fs-5 mb-4 py-3 px-2 gap-3 d-flex align-items-center justify-content-start">
                <BsFillExclamationDiamondFill />
                {warnTxt}
            </div>
            <div className="crypto-trading rounded-4">
                <div className='crypto-price d-flex justify-content-between align-items-center gap-5 px-4 py-3'>
                    <div className="d-flex gap-2 flex-wrap">
                        <button className="active">BTC</button>
                        <button className="bg-gradient-txt bg-clip-text">ETH</button>
                        <button className="bg-gradient-txt bg-clip-text">LINK</button>
                        <button className="bg-gradient-txt bg-clip-text">L1 Index</button>
                        <button className="bg-gradient-txt bg-clip-text">Growth Tech Equities Index</button>
                        <button className="bg-gradient-txt bg-clip-text">Swap Index</button>
                    </div>
                    <div className="fs-3 text-serif fw-semibold">$19,542.43</div>
                </div>
                <div className="crypto-assets d-flex justify-content-between px-4 py-3">
                    <div className='d-flex align-items-center'>
                        <label>Assets:</label>
                        <button className="d-flex align-items-center rounded-5 py-1 px-3 ms-3 bg-gradient-txt bg-clip-text"><img src={btc} width="20"/>BTC / USD - $19,542.43</button>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <AiFillWarning />
                        <span>Please Read</span>
                    </div>
                </div>
                <div id="tradingview-chart">
                    <iframe src={tradingViewUrl} />
                </div>
            </div>
            <div className='mt-5 mb-3 d-flex flex-column gap-3'>
                <div className="d-flex positions gap-2 flex-wrap">
                    <button className='active'>My Open Positions</button>
                    <button>My Closed Positions</button>
                    <button>All Closed Positions</button>
                </div>
                <div className="d-flex gap-3 search-reward justify-content-end">
                    <div className="d-flex rounded-5 search-nft align-items-center px-3">
                        <label>Search Open Position ID #</label>
                        <input type="text" />
                        <button>Search</button>
                        <button>Clear</button>
                    </div>
                </div>
            </div>
            <div className="rounded-4 no-position">
                <div className='pt-5 pb-3 text-gray-500'>
                    <img src={emptyPosition} width="230"/>
                    <h1 className="fw-bold text-purple-300">No Positions Found</h1>
                    <p className="fs-5">You have no positions yet!</p>
                </div>
            </div>
        </div>
    )
}
export default Perpetual;