import { useState, createContext } from "react";

export const MenuContext = createContext();

export const MenuConnectProvider = (props) => {
    const [show, setShow ] = useState(false);

    return (
        <MenuContext.Provider value={{ show, setShow }}>
            {props.children}
        </MenuContext.Provider>
    )
}