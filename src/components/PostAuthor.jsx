import {Link} from 'react-router-dom'
import Avatar from '../assets/images/pepe.png'

import './Posts.css'

const PostAuthor = () => {
    return ( 
        <Link to={`/posts/users/user1`} className="post-author">
            <div className="post_author_avatar">
                <img className="img-author" src={Avatar} alt="Avatar" />
            </div>
            <div className="post_author-details">
                <h5>By: Among us</h5>
            </div>
        </Link>
     );
}
 
export default PostAuthor;