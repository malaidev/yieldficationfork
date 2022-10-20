import { useContext, useEffect, useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { getConstData } from '../utils/getConstData';
import empty from '../assets/empty.svg';
import CustomButton from "../components/Button";
import { MenuContext } from '../context/MenuConnectContext';
import '../scss/vest.scss';

const Vest = () => {
    const [warnTxt, setWarnTxt] = useState("")
    const [noFoundTxt, setNoFoundTxt] = useState("")
    const {title, setTitle} = useContext(MenuContext);

    useEffect(() => {
        setWarnTxt(getConstData("warn"));
        setNoFoundTxt(getConstData("noFound"));
        setTitle('Vesting');
    }, [])

    return (
        <>
            <div className="vest-content py-5 px-4">
                <div className="net-warn fs-5 mb-4 py-3 px-2 gap-3 d-flex align-items-center justify-content-start">
                    <BsFillExclamationDiamondFill />
                    {warnTxt}
                </div>
                <div>
                    <div className='py-5 text-gray-500'>
                        <img src={empty} width="230"/>
                        <h1 className="fw-bold text-purple-300">No Vests Found</h1>
                        <p className="fs-5">{noFoundTxt}</p>
                        <CustomButton className='py-2 px-4'>Stake Today!</CustomButton>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Vest;