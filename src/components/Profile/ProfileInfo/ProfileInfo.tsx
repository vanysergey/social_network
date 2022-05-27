import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.contentImg}
                    // src="../../../../public/img/content.jpg"
                   src="https://mobimg.b-cdn.net/v3/fetch/c6/c6c09f523788bb0db3dcee1593a93367.jpeg"
                     alt="content"/>
            </div>
            <div className={s.descriptionBlock}>
                ava +
                description {/*<img src="https://avatars.githubusercontent.com/u/96809185?v=4" alt="avatat"/> ava + description*/}
            </div>

        </div>
    );
};

