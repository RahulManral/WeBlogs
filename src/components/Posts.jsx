import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostItem from './PostItem'
import Thumbnail1 from '../assets/images/pepe.png'
import Thumbnail2 from '../assets/images/pepe.png'
import Thumbnail3 from '../assets/images/pepe.png'
import Thumbnail4 from '../assets/images/pepe.png'

import './Posts.css'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is a title 1',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit dolor accusantium quod ratione ea temporibus ducimus repellendus repudiandae explicabo vitae quidem dolores, dolorem, unde, perspiciatis assumenda quam aliquam libero.',        
        authorID: 1
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'weather',
        title: 'This is a title 2',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit dolor accusantium quod ratione ea temporibus ducimus repellendus repudiandae explicabo vitae quidem dolores',
        authorID: 2
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'art',
        title: 'This is a title 3',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit dolor accusantium quod ratione ea temporibus ducimus repellendus repudiandae explicabo vitae quidem dolores',
        authorID: 3
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'website',
        title: 'This is a title 4',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit dolor accusantium quod ratione ea temporibus ducimus repellendus repudiandae explicabo vitae quidem dolores',
        authorID: 4
    },
    {
        id: '5',
        thumbnail: Thumbnail4,
        category: 'website',
        title: 'This is a title 4',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit dolor accusantium quod ratione ea temporibus ducimus repellendus repudiandae explicabo vitae quidem dolores',
        authorID: 4
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'website',
        title: 'This is a title 4',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit dolor accusantium quod ratione ea temporibus ducimus repellendus repudiandae explicabo vitae quidem dolores',
        authorID: 4
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'website',
        title: 'This is a title 4',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit dolor accusantium quod ratione ea temporibus ducimus repellendus repudiandae explicabo vitae quidem dolores',
        authorID: 4
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'website',
        title: 'This is a title 4',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit dolor accusantium quod ratione ea temporibus ducimus repellendus repudiandae explicabo vitae quidem dolores',
        authorID: 4
    },

     
]



const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    return ( 

        <section className="posts" key={posts.authorID}>
           <div className="container posts_container">
           {
                posts.map(({id, thumbnail, category, title, desc, autorID})=>< PostItem key={id} postID={id} thumbnail={thumbnail} category={category}
                title={title} description={desc} autorID={autorID}/>)
            }
           </div>
        </section>
     )
}
 
export default Posts;