import {TopBar} from "./TopBar.tsx";
import {SubContent} from "./SubContent.tsx";
import {BottomBar} from "../BottomBar.tsx";
import {Outlet} from "react-router";


export const Content = () => {
    return (
        <div className="content">
            <TopBar/>
            <SubContent/>
            <BottomBar/>
            <Outlet/>
        </div>
    )
}