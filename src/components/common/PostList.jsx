import React, {useContext} from 'react';
import Post from './Post';
import { postsContext } from '../context/posts-context';

const Postlist = () => {

    const {posts} =useContext(postsContext);
    console.log(posts);

    return (
        <div>
            {posts.map((post)=> (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    );
}

export default Postlist;
