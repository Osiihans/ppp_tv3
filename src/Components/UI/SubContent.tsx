import {TopItems} from "./TopItems.tsx";
import {TopItemsBelow} from "./TopItemsBelow.tsx";


export const SubContent = () => {
    return (
        <div className="sub-content">
            <TopItems/>
            <TopItemsBelow/>
        </div>
    )
}