import {useNavigate , Link } from "react-router-dom";
import "./singlePost.css";



export default function SinglePost() {
  
  const history = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:3000/post/abc' , {
      method: 'DELETE'
    }).then(() => {
      history('/');
    }) 
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://1.bp.blogspot.com/-SRrN8ohXWEw/XH3-W6UNJZI/AAAAAAAAFtk/eGYbbrahDDAO9w2O_r0iOHEprl59vkhZQCLcBGAs/w480/IMG-20190302-WA0018.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Hipe that You'll Return
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleClick}></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Daisy">
                Daisy
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        And my irreproachable hankering for the Sea has taken me to the Waves time and again, yet couldn't rout my yearning for You.
        <br></br> 
        The Waves and the golden Shore has always left me flabbergasted, but not more than the depth of your Ocean-Blue eyes.
        <br></br>
        The felicity in my craving for the evanscent waves has always given me the aspiration to Love.
        For, the transient waves are in congorous with the unswerving Love that I have for You.
        The dearth of your fragnance has taught me how to discern the fragility of my soul.
        And as I walk by the Flower , the Orchids make me reminisce the magnanimous Sea Shore, the lavish Sunset, the uncountable Waves washing our feet, the unending sand over the shore.
        But, the dubious sea-wind has always given me hope. A hope that you'll return to your Home.
        For no human stays happy as a Nomad.
          
        </p>
      </div>
    </div>
  );
}
