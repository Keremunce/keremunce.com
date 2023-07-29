import { NavLink } from "react-router-dom";
export default function Page404(){
    return(
        <>
            <h1>Sayfa Bulunamadi</h1>
            <NavLink to="/">Return Home</NavLink>
        </>
    )
}