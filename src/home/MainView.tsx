import {SideHighLight} from "../Components/SideHighLight.tsx";
import {MidSection} from "../Components/MidSection.tsx";
import {SideBar} from "../Components/SideBar.tsx";

const MainView = () => {

    return (
        <div className='mainView'>
            <div className='sideHighLight'>
                <SideBar/>
            </div>
            <MidSection/>
            <div className='sideHighLight'>
                <SideHighLight/>
            </div>
        </div>
    )
}

export default MainView