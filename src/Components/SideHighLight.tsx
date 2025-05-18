import {CategoryTags} from "./UI/CategoryTags.tsx";
import {UserRecommend} from "./UI/UserRecommend.tsx";
import {CardShort} from "./UI/CardShort.tsx";



export  const SideHighLight = () => {
    return (
        <div className="side-bar-right">
            <div className="page-curated-container">
                <div className="page-curated">
                    <h3 className="head-start">Curated Picks</h3>
                    <div className="card-curated-container">
                        {/*<Link to="/categories">*/}
                        {/*    <h5 style={{borderBottomStyle:"ridge"}}>View all curated picks</h5>*/}
                        {/*</Link>*/}
                        <CardShort/>
                        <CardShort/>
                        <CardShort/>
                    </div>
                </div>
                <div className="page-curated2">
                    <h3>Categories</h3>
                    <div className="category-tags-container">
                        <CategoryTags/>
                        <CategoryTags/>
                        <CategoryTags/>
                        <CategoryTags/>
                        <CategoryTags/>
                        <CategoryTags/>
                        <CategoryTags/>
                        {/*<Link to="/categories">*/}
                        {/*    <h5 style={{borderBottomStyle:"ridge"}}>View all categories</h5>*/}
                        {/*</Link>*/}
                    </div>

                </div>
                <div className="page-curated3">
                    <h3>Recommended Follows</h3>
                    <UserRecommend/>
                    <UserRecommend/>
                </div>
            </div>
        </div>
    )
}