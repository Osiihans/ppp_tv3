import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookBookmark, faBullhorn, faChevronDown, faHistory, faHome, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {faShop} from "@fortawesome/free-solid-svg-icons/faShop";
import {Link, NavLink} from "react-router";


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
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faHome}/> Home
                        </NavLink>
                    </div>
                    <div className="nav-pages-items">
                        <NavLink to="/saved">
                            <FontAwesomeIcon icon={faBookBookmark}/>  Saved
                        </NavLink>
                    </div>
                    <div className="nav-pages-items">
                        <NavLink to="/history">
                            <FontAwesomeIcon icon={faHistory}/> Read History
                        </NavLink>
                    </div>
                </div>
                <div className="nav-pages2">
                    <div className="nav-pages-items2">
                        <NavLink to="/advertisement">
                            <FontAwesomeIcon icon={faBullhorn}/> Advertisement
                        </NavLink>
                    </div>
                    <div className="nav-pages-items2">
                        <NavLink to="/shop">
                            <FontAwesomeIcon icon={faShop}/> Shop
                        </NavLink>
                    </div>
                    <div className="nav-pages-items2">
                        <NavLink to="/community">
                            <FontAwesomeIcon icon={faPeopleGroup}/>   Communities
                        </NavLink>
                    </div>
                </div>
                <div className="nav-pages3">
                    <div className="nav-pages-items3">
                        <Link to="/">
                            <i className="fab fa-youtube"></i>  YouTube
                        </Link>
                    </div>
                    <div className="nav-pages-items3">
                        <Link to="">
                            <i className="fab fa-tiktok"></i> TikTok
                        </Link>
                    </div>
                    <div className="nav-pages-items3">
                        <Link to="">
                            <i className="fab fa-instagram"></i>   Instagram
                        </Link>

                    </div>
                    <div className="nav-pages-items3">
                        <Link to="">
                            <i className="fab fa-twitter"></i>  Twitter
                        </Link>
                    </div>
                    <div className="nav-pages-items3">
                        <Link to="">
                            <i className="fab fa-facebook"></i>  Facebook
                        </Link>
                    </div>
                    <div className="nav-pages-items3">
                        <Link to="">
                            <i className="fa fa-tools"></i>  Settings
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}