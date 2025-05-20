import {Link} from "react-router";


export const CardShort = () => {
    return (
        <div className="card-curated">
            <Link to="author">
                <div className="author-curated">
                    <img src="https://picsum.photos/200/300" alt=""/>
                    <h3 className="author-name">Hans</h3>
                    <h3 className="category2">Tech</h3>
                </div>
            </Link>
            <div className="story-curated">
                <h6><Link to="single">RabbitMQ the TypeScript wayRabbitMQ the TypeScript wayRabbitMQ the TypeScript
                    way</Link></h6>
                <img src="https://picsum.photos/200/300" alt=""/>
            </div>
            <div className="bottom-info-short">
                <div className="date">May 12 2025</div>
                <div className="views">
                    <i className="fa fa-eye"></i>
                    <span>1234</span>
                </div>
                <div className="bookmark">
                    <i className="fa fa-bookmark"></i>
                </div>
            </div>

        </div>
    )
}