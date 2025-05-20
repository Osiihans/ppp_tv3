import {Comments} from "../Components/UI/Comments.tsx";
import {NavLink} from "react-router";


export const SinglePost = () => {
    return (
        <div className="view-post">
            <div className="view-post-img">
                <img src="https://picsum.photos/200/300" alt=""/>
            </div>
            <div className="view-post-content">
                <h1>Title</h1>
                <NavLink to="author">
                    <div className="view-post-author">
                        <img src="https://picsum.photos/200/300" alt=""/>
                        <h3>Author</h3>
                    </div>
                </NavLink>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>

            </div>
            <div className="view-post-comments">
                <Comments/>
                <Comments/>
                <Comments/>
                <Comments/>
                <Comments/>
                <Comments/>
                <Comments/>
            </div>
        </div>
    )
}