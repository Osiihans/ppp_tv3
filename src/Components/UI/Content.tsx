import {TopBar} from "./TopBar.tsx";
import {SubContent} from "./SubContent.tsx";
import {BottomBar} from "../BottomBar.tsx";


export const Content = () => {
    return (
        <div className="content">
            <TopBar/>
            <SubContent/>
            <BottomBar/>
        </div>
    )
}