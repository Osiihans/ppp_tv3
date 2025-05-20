import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faEye} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router";


export const CardLong = () => {
    return (
        <div className="card-other-stories">
            <div className="story-img2">
                <img src="https://picsum.photos/id/1005/500/300" alt=""/>
            </div>
            <div className="side-info">
                <Link to="author">
                    <div className="author2">
                        <img src="https://picsum.photos/id/1005/500/300" alt=""/>
                        <h3 className="author-name">Hans</h3>
                        <h3 className="category2">Tech</h3>
                    </div>
                </Link>

                <h3 className="title-headline"><Link to="single">RabbitMQ the TypeScript Way</Link></h3>

                <h5 className="start-snippet2">
                    <Link to="single">
                        RabbitMQ supports plugins. Plugins extend core broker functionality in a variety of ways: with
                        support for more protocols, system state monitoring
                    </Link>
                </h5>

                <div className="bottom-info">
                    <div className="date">May 12 2025</div>
                    <div className="views">
                        <FontAwesomeIcon icon={faEye}/>
                        <span>1234</span>
                    </div>

                    <div className="bookmark" onClick={alert}>
                        <FontAwesomeIcon icon={faBookmark}/>
                    </div>

                </div>
            </div>
        </div>
    )
}