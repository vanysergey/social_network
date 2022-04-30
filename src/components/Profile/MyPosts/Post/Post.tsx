import React from 'react';
import s from './Post.module.css'
type PostsType ={
    message: string,
    likeCount: number,
    dislikeCount: number
    id: number
}

export const Post = (props:PostsType) => {

    return (
        <div>
            <div className={s.item}>
                <img className={s.avatar}
                    src={'https://cdn4.vectorstock.com/i/1000x1000/94/78/man-avatar-flat-design-social-media-hipster-user-vector-20649478.jpg'}
                    alt="avatar"/>
                {props.message}
                <div className={s.assessment}>
                    {props.likeCount}<button  className={s.buttonsLikeDiselike} type="button"><img className={s.like} src={'https://emojitool.ru/img/whatsapp/2.21.23.23/thumbs-up-2625.png'}/></button>
                    {props.dislikeCount}<button className={s.buttonsLikeDiselike} type='button'><img className={s.dislike} src={'https://emojitool.ru/img/whatsapp/2.21.23.23/thumbs-down-1580.png'}/></button>
                </div>
            </div>
        </div>
    );
};

