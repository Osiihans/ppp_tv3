import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookBookmark, faBullhorn, faChevronDown, faHistory, faHome, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {faShop} from "@fortawesome/free-solid-svg-icons/faShop";


export const SideBar = () => {
    return (
        <div className="side-bar">
           <div className="user-info">
               <div className="profile-user">
                   <img src="https://picsum.photos/id/1005/500/300" alt=""/>
                   <h3 className="author-name" >Hans</h3>
                   <FontAwesomeIcon className="icon-down" icon={faChevronDown}/>
               </div>
           </div>
            <div className="nav-container">
                <div className="nav-pages">
                    <div className="nav-pages-items">
                        <FontAwesomeIcon icon={faHome}/> Home
                    </div>
                    <div className="nav-pages-items">
                        <FontAwesomeIcon icon={faBookBookmark}/>  Saved
                    </div>
                    <div className="nav-pages-items">
                        <FontAwesomeIcon icon={faHistory}/> Read History
                    </div>
                </div>
                <div className="nav-pages2">
                    <div className="nav-pages-items2">
                        <FontAwesomeIcon icon={faBullhorn}/> Advertisement
                    </div>
                    <div className="nav-pages-items2">
                        <FontAwesomeIcon icon={faShop}/> Shop
                    </div>
                    <div className="nav-pages-items2">
                        <FontAwesomeIcon icon={faPeopleGroup}/>   Communities
                    </div>
                </div>
                <div className="nav-pages3">
                    <div className="nav-pages-items3">
                        <i className="fab fa-youtube"></i>  YouTube
                    </div>
                    <div className="nav-pages-items3">
                      <i className="fab fa-tiktok"></i> TikTok
                    </div>
                    <div className="nav-pages-items3">
                       <i className="fab fa-instagram"></i>   Instagram
                    </div>
                    <div className="nav-pages-items3">
                        <i className="fab fa-twitter"></i>  Twitter
                    </div>
                    <div className="nav-pages-items3">
                        <i className="fab fa-facebook"></i>  Facebook
                    </div>
                    <div className="nav-pages-items3">
                        <i className="fa fa-tools"></i>  Settings
                    </div>
                </div>
            </div>

        </div>
    )
}