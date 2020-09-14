import React from 'react';
import Character from '../Character/Character';
import s from './CharacterList.module.scss';

const CharacterList = ({characters}) => {
    const arr = characters;
    console.log(characters)
    return (
        <div className={s.wrap}>
            {
                arr.map((el, index) => {
                    return <Character key={index} url={el.url}>{el.name}</Character>
                })
            }
        </div>
    )
}

export default CharacterList;
