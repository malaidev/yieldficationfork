import React, { useContext, useEffect, useState } from 'react';
import cls from 'classnames';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import MenuBar from './MenuBar';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import '../scss/layout.scss';

const Home = ({props}) => {
    const [theme, setTheme] = useState('dark');
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        getDashboard();
    }, [])
    const getDashboard = () => {
        if (location.pathname == '/') {
            navigate('/dashboard');
        }
    }
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

   return (
    <>
        <div className={cls('main', 'd-flex', 'w-100', 'dark-mode', theme)}>
            <MenuBar toggleTheme={toggleTheme} modeState={theme}/>
            <div className="app-container">
                <Header />
                <Row>
                    <Col lg={4} md={12} sm={12}>
                        <SideBar />
                    </Col>
                    <Col lg={8} md={12} sm={12}>
                        <div className="main-content">
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>
   ) 
}
export default Home;