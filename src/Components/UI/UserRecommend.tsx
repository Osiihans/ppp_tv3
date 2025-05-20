import {Link} from "react-router";


export const UserRecommend = () => {
    return (
        <div className="user-recommend">
            <Link to="author">
                <img src="https://picsum.photos/200/300" alt=""/>
            </Link>
            <h3 className="author-name"><Link to="author">Hans </Link></h3>
            <div className="followBtn" onClick={alert}>
                Follow +
            </div>
        </div>
    )
}