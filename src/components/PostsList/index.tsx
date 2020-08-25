import React from 'react'

import Post, { IPost } from '../Post'
 
interface Props {
    postsList: IPost[]
}

const PostsList: React.FunctionComponent<Props> = ({
    postsList
}) => {
    const renderPostsList = () => {
        return postsList.map((post, i) => <Post key={`post-${i}`} post={post}/>)
    }

    return (
        <section className="posts-list">
            {renderPostsList()}
        </section>
    )
}

export default PostsList