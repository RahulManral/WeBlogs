import {Link} from "react-router-dom"
import PostAuthor from "./PostAuthor";

import './Posts.css'

const PostItems = ({postID, category, title, description, authorID, thumbnail}) => {
    const shortDescription = description.length > 100 ? description.substr(0, 100) + '...' : description;
    const postTitle = title.length > 20 ? title.substr(0,100) + '...' : title;
    return ( 
        <article className="post">
            <div className="post_thumbnail">
                <img className="img-post" src={thumbnail} alt={title}/>
            </div>
            <div className="post_content">
                <Link to={`/posts/${postID}`}>
                <h3 className="title">{postTitle}</h3>
                </Link>
                <p className="discription">{shortDescription}</p>
                <div className="post_footer">
                    <PostAuthor />
                    <Link to={`/posts/categories/${category}`} className="category-btn">{category}</Link>
                </div>
            </div>
        </article>
     );
}
 
export default PostItems;
