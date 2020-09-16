import React from 'react';
import Character from '../Character/Character';
import s from './CharacterList.module.scss';

const CharacterList = ({ characters, searchValue }) => {
    const arr = characters !== ''
        ? characters.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()))
        : characters;
    return (
        <div className={s.wrap}>
            {
                arr.map((el, index) => {
                    return <Character key={index} url={el.url}>
                        <p className={s.name}>{el.name}</p>
                    </Character>
                })
            }
        </div>
    )
}

export default CharacterList;
