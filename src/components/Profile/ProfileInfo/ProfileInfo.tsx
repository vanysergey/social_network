import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.contentImg}
                     src="https://phonoteka.org/uploads/posts/2021-07/thumbs/1625567260_12-phonoteka-org-p-velosiped-zastavka-krasivie-zastavki-12.jpg"
                     alt="content"/>
            </div>
            <div className={s.descriptionBlock}>
                ava +
                description {/*<img src="https://avatars.githubusercontent.com/u/96809185?v=4" alt="avatat"/> ava + description*/}
            </div>

        </div>
    );
};

