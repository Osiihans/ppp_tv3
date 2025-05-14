export const Card = () => {
    return (
        <div className="card">
            <div className="tag-title">Trending</div>
            <div className="story-img">
                <img src="https://picsum.photos/200/300" alt=""/>
            </div>
            <div className="author-section">
                <div className="author">
                    <img className="author-img" src="https://picsum.photos/200/300" alt=""/>
                    <h3 className="author-name">Hans</h3>
                    <h3 className="category">Fashion</h3>
                </div>
                <div className="title">RabbitMQ the TypeScript Way</div>
                <div className="start-snippet">
                    RabbitMQ supports plugins. Plugins extend core broker functionality in a variety of ways: with
                    support for more protocols, system state monitoring
                </div>
            </div>
        </div>
    )
}