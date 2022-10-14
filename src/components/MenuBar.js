import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegGrinStars, FaGripLines, FaTimes } from "react-icons/fa";
import { BsCardImage } from "react-icons/bs";
import { RiDatabase2Fill, RiDashboardFill } from 'react-icons/ri';
import { Col, Button } from 'react-bootstrap';
import { getWindowDimensions } from '../utils/GlobalFuns';
import logo from '../assets/logo.png';
import { MenuContext } from '../context/MenuConnectContext';

const MenuBar = (props) => {
    const [windowSize, setWindowSize] = useState(getWindowDimensions());
    // const menuButtonState = useContext(MenuContext);
    const { show, setShow } = useContext(MenuContext);
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
        console.log(" ------ show data ------- ", show)
    })
    const handleHamburger = () => {
        setShow(!show);
      }
    return (
        <>
            {
                windowSize.width >= 1024 ?    
                    <Col className="menu-content">
                        <Col className="py-3">
                            <Link to="/dashboard">
                                <img src={logo} width="25"/>
                            </Link>
                        </Col>
                        <Col className="menubar d-flex flex-column mt-5 gap-5">
                            <Link className="active" to="/">
                                <RiDashboardFill/>
                            </Link>
                            <Link to="/">
                                <RiDatabase2Fill/>
                            </Link>
                            <Link to="/">
                                <BsCardImage/>
                            </Link>
                            <Link to="/">
                                <FaRegGrinStars/>
                            </Link>
                            <Link to="/">
                                <FaRegGrinStars/>
                            </Link>
                            <Link to="/">
                                <FaRegGrinStars/>
                            </Link>
                            <Link to="/">
                                <FaRegGrinStars/>
                            </Link>
                        </Col>
                    </Col>
                :
                <>
                    {
                        show ? 
                        <div className="d-flex mobile-menu position-absolute">
                            <Col className="mobile-menu-button">
                                <div className="menu-close-area d-flex justify-content-end">
                                    <Button onClick={handleHamburger} className="btn-hamburger position-relative" style={{zIndex: 10}}><FaTimes /></Button>
                                </div>
                                <Col className="">
                                    <Link to="/dashboard">
                                        <img src={logo} width="45"/>
                                    </Link>
                                </Col>
                                <Col className="menubar d-flex flex-column ps-3 pe-5 me-5 align-items-start mt-5 gap-4">
                                    <Link className="active" to="/">
                                        <RiDashboardFill/> Dashboard
                                    </Link>
                                    <Link to="/">
                                        <RiDatabase2Fill/> Stake!
                                    </Link>
                                    <Link to="/">
                                        <BsCardImage/> NFTs
                                    </Link>
                                    <Link to="/">
                                        <FaRegGrinStars/> Rewards
                                    </Link>
                                    <Link to="/">
                                        <FaRegGrinStars/> Futures Trading
                                    </Link>
                                    <Link to="/">
                                        <FaRegGrinStars/> Leaderboard
                                    </Link>
                                    <Link to="/">
                                        <FaRegGrinStars/>
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