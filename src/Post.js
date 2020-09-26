import React, {useState} from 'react'
import './Post.css';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({profile,image,name,tag,time,like,description}) {

    const [num, setNum] = useState(like);

    const incNum = () => {
        setNum(num+1);
    }
    return (
        <div className="timeline">
        <div className="post">
            <div className="post-avatar">
                <img src={profile} className="profile-pic" />   
            </div>
            <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
               {name}
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" />{tag}
                </span>
               <span className="time">{time}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
             <p>{description}</p>
            </div>
          </div>
          <img src={image} className="post-pic" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" /> <span>20</span>
            <RepeatIcon fontSize="small" /><span>30</span>
            <FavoriteBorderIcon fontSize="small" onClick={incNum} /><span>{num}</span>
            <PublishIcon fontSize="small" />
          </div>
        </div>
        </div>
        
        </div>
    )
}

export default Post
