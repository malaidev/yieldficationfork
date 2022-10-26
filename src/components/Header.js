import Container from 'react-bootstrap/Container';
import { FaGripLines } from 'react-icons/fa';
import { HiOutlineMenuAlt2, HiMenuAlt2 } from 'react-icons/hi';
import { Nav, Navbar } from 'react-bootstrap';
import CustomButton from './Button';
import { IoDiamondOutline } from "react-icons/io5";
import { Col, Button } from 'react-bootstrap';
import { getWindowDimensions } from '../utils/GlobalFuns';
import logo from '../assets/logo2.png';
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../context/MenuConnectContext';
import { connectWallet } from './ConnectWalletModal';


function Header() {
  const [windowSize, setWindowSize] = useState(getWindowDimensions());
  const { show, setShow } = useContext(MenuContext);
  const { title, setTitle } = useContext(MenuContext);

  useEffect(() => {
      function handleWindowResize() {
          setWindowSize(getWindowDimensions());
      }
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
  }, [])

  const handleHamburger = () => {
    setShow(!show);
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex align-items-center justify-content-between">
        {
          windowSize.width <= 1024 && <div className="hamburger-area"><Button onClick={handleHamburger} className="btn-hamburger position-relative"><HiMenuAlt2 /></Button></div>
        }
        <Navbar.Brand className="ft-bold ml-4" href="#home">{title}</Navbar.Brand>
        <div className="d-flex gap-2" id="basic-navbar-nav">
            <Nav.Link className="round-1x5 d-flex align-items-center justify-content-center gap-2" href="#home"><img src={logo} width="25"/>$0.0710</Nav.Link>
            <Nav.Link className="round-1x5 d-flex align-items-center justify-content-center gap-2" href="#link"> <IoDiamondOutline />$1,288.79</Nav.Link>
            <CustomButton className="" onClick={ connectWallet }>Connect Wallet</CustomButton>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;