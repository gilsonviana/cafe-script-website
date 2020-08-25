import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export interface IPost {
    id: number,
    title: string,
    likes: number
    excerpt: string,
    avatar: string,
    author_fullname: string,
    author_username: string,
}

interface State {
    showTooltip: boolean
}

interface Props {
    post: IPost
}

const Post: React.FunctionComponent<Props> = ({
    post
}) => {
    const [postState, setPostState] = useState<State>({
        showTooltip: false
    })

    const handleTooltip = (value: boolean): void => {
        setPostState({
            ...postState,
            showTooltip: value
        })
    }

    const renderTooltip = (): React.ReactChild | void => {
        // if (postState.showTooltip) {
            return (
                <div className={`post__header__end__toooltip ${postState.showTooltip && 'show'}`}>
                    <span>De seu like para este post</span>
                </div>
            )
        // }
    }

    return (
        <article className="post">
            <div className="post__content">
                <div className="post__header d-flex justify-content-between">
                    <h2 className="post__header__title font-mono font-weight-bold">{post.title}</h2>
                    <div className="post__header__end" onMouseEnter={() => handleTooltip(true)} onMouseLeave={() => handleTooltip(false)}>
                        <span className="post__header__likes">{post.likes}</span>
                        <img className="post__header__icon" src={require('../../assets/icons/clap.png')} alt="Clap for post"/>
                    </div>
                    {renderTooltip()}
                </div>
                <p className="post__excerpt font-weight-light">{post.excerpt}</p>
                <div className="post__footer d-flex justify-content-between">
                    <div className="post__footer__start d-flex align-items-center">
                        <div className="post__footer__avatar">
                            <img src={post.avatar} alt=""/>
                        </div>
                        <Link to={`/autor/${post.author_username}`} className="post__footer__author__link"><h5 className="post__footer__author font-slab font-weight-light">{post.author_fullname}</h5></Link>
                    </div>
                    <div className="post__footer__end">
                        <Link to={`/artigo/${post.id}`} className="post__footer__link font-slab">Leia mais</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Post