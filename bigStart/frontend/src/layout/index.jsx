import {Outlet} from "react-router-dom";

export default function Layout(){
    return (
        <div className="Layout">
            <Outlet/>
        </div>
    );
}