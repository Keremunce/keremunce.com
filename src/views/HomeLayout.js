import { Outlet } from "react-router-dom"
export default function HomeLayout(){
    return(
        <>
            <h1>Home Layout</h1>
            <Outlet></Outlet>
        </>
    )
}