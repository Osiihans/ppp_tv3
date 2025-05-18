import {Link} from "react-router";


export  const TopBar = () => {
    return (
        <div className="top-bar">
          <div className="tab">
              <Link to="/">
                  <div className="column active">For You</div>
              </Link>
              <Link to="/trending">
                  <div className="column">Trending</div>
              </Link>
              <Link to="/following">
                  <div className="column">Following</div>
              </Link>

          </div>
        </div>
    )
}