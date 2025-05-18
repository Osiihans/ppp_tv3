import {Link} from "react-router";

export const BottomBar = () => {
    return (
        <div className="mobile-bottom-bar">
            <div className="tab-icons">
                <div className="mb-column active">
                    <Link to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                </div>
                <div className="mb-column">
                    <Link to="search">
                        <i className="fa fa-search"></i>
                    </Link>
                </div>
                <div className="mb-column">
                    <Link to="messages">
                        <i className="fa fa-envelope"></i>
                    </Link>
                </div>
                <div className="mb-column">
                    <Link to="categories">
                        <i className="fa fa-list"></i>
                    </Link>

                </div>
                <div className="mb-column">
                    <Link to="settings">
                        <i className="fa fa-tools"></i>
                    </Link>

                </div>
            </div>
        </div>
    )
}