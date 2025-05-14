import {SearchBar} from "./UI/SearchBar.tsx";
import {Content} from "./UI/Content.tsx";


export const MidSection = () => {
    return (
        <div className='midSection'>
            <SearchBar/>
            <Content/>
        </div>
    )
}