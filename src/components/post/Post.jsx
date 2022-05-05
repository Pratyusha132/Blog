import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          Hipe that You'll Return
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        And my irreproachable hankering for the Sea has taken me to the Waves time and again, yet couldn't rout my yearning for You.
        <br /> 
        The Waves and the golden Shore has always left me flabbergasted, but not more than the depth of your Ocean-Blue eyes.
        <br></br>
        The felicity in my craving for the evanscent waves has always given me the aspiration to Love.
      </p>
    </div>
  );
}
