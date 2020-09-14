import React from 'react';
import s from './Character.module.scss';

const Character = ({children, url}) => {
    const arr = url.split('/')
    const id = arr[arr.length - 2]
    console.log(id)

    return (
        <div className={s.card}>
            {children}
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
        </div>
    )
}

export default Character;
