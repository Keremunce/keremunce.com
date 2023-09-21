import { createContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {

    const navigate = useNavigate();

    const form = useRef();

    const [tab, setTab] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const [menuBtn, setMenuBtn] = useState(false);


    const [formData, setFormData] = useState({
        from_name: "",
        user_email: "",
        subject: "",
        message: ""
    });
    

    const allData = {
        navigate,
        tab, setTab, menuBtn, setMenuBtn,
        isLoading, setIsLoading,
        form, formData, setFormData, isSending, setIsSending
    };

    return (
        <GlobalContext.Provider value={allData}>
            {props.children}
        </GlobalContext.Provider>
    );
};
