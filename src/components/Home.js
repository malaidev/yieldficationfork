import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import MenuBar from './MenuBar';
import SideBar from './SideBar';
import '../scss/layout.scss';

const Home = (props) => {
    useEffect(() => {
        console.log("--------- home --------")
    }, [])
   return (
    <>
        <div className="main d-flex w-100 dark-mode">
            <MenuBar />
            <div className="app-container">
                <Header />
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <SideBar />
                    </Col>
                    <Col lg={8} md={8} sm={12}>
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