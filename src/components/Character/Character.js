import React from 'react';
import s from './Character.module.scss';
import { Link } from 'react-router-dom'

const Character = ({ children, url }) => {
    const arr = url.split('/')
    const id = arr[arr.length - 2]

    return (
        <Link to={`/character/${id}`} className={s.Link}>
            <div className={s.card}>
                {children}
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
            </div>
        </Link>
    )
}

export default Character;
