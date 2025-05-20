import {Link} from "react-router";

export const Card = () => {
    return (
        <div className="card">
            <div className="tag-title">Trending</div>

            <div className="story-img">
                <img src="https://picsum.photos/200/300" alt=""/>
            </div>

            <div className="author-section">
                <Link to="author">
                    <div className="author">
                        <img className="author-img" src="https://picsum.photos/200/300" alt=""/>
                        <h3 className="author-name"><Link to="author">Hans </Link></h3>
                        <h3 className="category">Fashion</h3>
                    </div>
                </Link>

                <div className="title"><Link to="single">RabbitMQ the TypeScript Way</Link></div>
                <div className="start-snippet">
                    <Link to="single">
                        RabbitMQ supports plugins. Plugins extend core broker functionality in a variety of ways: with
                        support for more protocols, system state monitoring
                    </Link>
                </div>


            </div>
        </div>
    )
}