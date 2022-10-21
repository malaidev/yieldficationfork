import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaRegGrinStars, FaGripLines, FaTimes } from "react-icons/fa";
import { BsCardImage, BsBriefcaseFill, BsStars, BsBarChartLineFill } from "react-icons/bs";
import { RiDatabase2Fill, RiDashboardFill } from 'react-icons/ri';
import { GiStripedSun } from 'react-icons/gi';
import { Col, Button } from 'react-bootstrap';
import { getWindowDimensions } from '../utils/GlobalFuns';
import logo from '../assets/logo.webp';
import { MenuContext } from '../context/MenuConnectContext';
import cls from 'classnames';

const MenuBar = (props) => {
    const [windowSize, setWindowSize] = useState(getWindowDimensions());
    const { show, setShow } = useContext(MenuContext);
    const [ path, setPath ] = useState('');
    let location = useLocation();

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowDimensions());
        }
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    const handleHamburger = () => {
        setShow(!show);
      }
    return (
        <>
            {
                windowSize.width >= 1024 ?    
                    <Col className="menu-content">
                        <Col className="py-3 mt-2">
                            <Link to="/dashboard">
                                <img src={logo} width="35"/>
                            </Link>
                        </Col>
                        <Col className="menubar d-flex flex-column mt-5 mb-3 gap-5">
                            <Link className={cls(path=='/dashboard' && 'active')} to="/dashboard">
                                <RiDashboardFill/>
                            </Link>
                            <Link className={cls(path=='/stake' && 'active')} to="/stake">
                                <RiDatabase2Fill/>
                            </Link>
                            <Link className={cls(path=='/nft' && 'active')} to="/nft">
                                <BsCardImage/>
                            </Link>
                            <Link className={cls(path=='/vesting' && 'active')} to="/vesting">
                                <BsBriefcaseFill/>
                            </Link>
                            <Link className={cls(path=='/perpetual' && 'active')} to="/perpetual">
                                <BsBarChartLineFill/>
                            </Link>
                            <Link className={cls(path=='/leaderboard' && 'active')} to="/leaderboard">
                                <BsStars/>
                            </Link>
                            <Link onClick={props.toggleTheme} className={cls(props.modeState=='dark' &&'dark-mode-activate')}>
                                <GiStripedSun/>
                            </Link>
                        </Col>
                    </Col>
                :
                <>
                    {
                        show ? 
                        <div className="d-flex mobile-menu position-fixed">
                            <Col className="mobile-menu-area">
                                <div className="menu-close-area d-flex justify-content-end">
                                    <Button onClick={handleHamburger} className="btn-close position-relative" style={{zIndex: 10}}><FaTimes /></Button>
                                </div>
                                <Col className="">
                                    <Link to="/dashboard">
                                        <img src={logo} width="45"/>
                                    </Link>
                                </Col>
                                <Col className="menubar d-flex flex-column ps-3 pe-5 me-5 align-items-start mt-5 mb-3 gap-4">
                                    <Link className={cls(path=='/dashboard' && 'active')} to="/dashboard">
                                        <RiDashboardFill/>&nbsp;&nbsp; Dashboard
                                    </Link>
                                    <Link className={cls(path=='/stake' && 'active')} to="/stake">
                                        <RiDatabase2Fill/>&nbsp;&nbsp; Stake!
                                    </Link>
                                    <Link className={cls(path=='/nft' && 'active')} to="/nft">
                                        <BsCardImage/>&nbsp;&nbsp; NFTs
                                    </Link>
                                    <Link className={cls(path=='/vesting' && 'active')} to="/vesting">
                                        <BsBriefcaseFill/>&nbsp;&nbsp; Rewards
                                    </Link>
                                    <Link className={cls(path=='/perpetual' && 'active')} to="/perpetual">
                                        <BsBarChartLineFill/>&nbsp;&nbsp; Futures Trading
                                    </Link>
                                    <Link className={cls(path=='/leaderboard' && 'active')} to="/leaderboard">
                                        <BsStars/>&nbsp;&nbsp; Leaderboard
                                    </Link>
                                    <Link onClick={props.toggleTheme} className={cls(props.modeState=='dark' &&'dark-mode-activate')}>
                                        <GiStripedSun/>
                                    </Link>
                                </Col>
                            </Col>
                        </div>
                        :
                        ""
                    }
                </>
            }
        </>
    )
}
export default MenuBar;