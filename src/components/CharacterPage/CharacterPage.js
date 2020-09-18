import React, { useState, useEffect } from 'react';
import s from './CharacterPage.module.scss';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


const CharacterPage = () => {
    const [info, setInfo] = useState({})
    const history = useHistory();
    // state
    const params = useParams();
    const { id } = params
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    useEffect(() => {
        const getInfoCharacter = async () => {
            try {
                const res = await fetch(`${url}`);
                const data = await res.json();
                setInfo(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getInfoCharacter()
    }, [])

    return (
        <div className={s.container}>
            <p className={s.button} onClick={() => history.goBack()}>Назад</p>
            <div className={s.image}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
            </div>
            <div className={s.name}>
                <div className={s.title}>
                    Имя персонажа:
                </div>
                {info.name}
            </div>
            <div className={s.row}>
                <div className={s.title}>
                    Тип персонажа:
                </div>
                <div className={s.row}>
                    {
                        info.types?.map((el) => {
                            return (
                                <p key={el.type.name} className={s.name}>{el.type.name}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className={s.column}>
                <div className={s.title}>
                    Характеристики:
                </div>
                {
                    info.stats?.map((el) => {
                        return (
                            <p key={el.stat.name}>Базовые навыки: {el.stat.name} - {el.base_stat}, Усилие: {el.effort}</p>
                        )
                    })
                }
            </div>

            <div className={s.column}>
                <div className={s.title}>
                    Список способностей:
                </div>
                {
                    info.abilities?.map((el) => {
                        const arr = el.ability.url.split('/')
                        const abilityId = arr[arr.length - 2]
                        return (
                            <Link to={`/ability/${abilityId}`} key={el.ability.name}> {el.ability.name} </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}


export default CharacterPage;
