import { useState, createContext } from "react";

export const MenuContext = createContext();

export const MenuConnectProvider = (props) => {
    const [show, setShow ] = useState(false);
    const [title, setTitle ] = useState('');

    return (
        <MenuContext.Provider value=
            {{ 
                show, 
                title, 
                setShow,  
                setTitle,
            }}>
            {props.children}
        </MenuContext.Provider>
    )
}