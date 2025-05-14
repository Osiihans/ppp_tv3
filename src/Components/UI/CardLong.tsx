import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faEye} from "@fortawesome/free-solid-svg-icons";


export const CardLong = () => {
    return (
        <div className="card-other-stories">
            <div className="story-img2">
                <img src="https://picsum.photos/id/1005/500/300" alt=""/>
            </div>
            <div className="side-info">
                <div className="author2">
                    <img src="https://picsum.photos/id/1005/500/300" alt=""/>
                    <h3 className="author-name">Hans</h3>
                    <h3 className="category2">Tech</h3>
                </div>
                <h1 className="title-headline">RabbitMQ the TypeScript Way</h1>
                <h5 className="start-snippet2">
                    RabbitMQ supports plugins. Plugins extend core broker functionality in a variety of ways: with
                    support for more protocols, system state monitoring
                </h5>
                <div className="bottom-info">
                    <div className="date">May 12 2025</div>
                    <div className="views">
                        <FontAwesomeIcon icon={faEye}/>
                        <span>1234</span>
                    </div>
                    <div className="bookmark">
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                </div>
            </div>
        </div>
    )
}