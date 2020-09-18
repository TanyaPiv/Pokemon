import React, { useState, useEffect } from 'react';
import s from './AbilityPage.module.scss';
import { useParams, useHistory } from 'react-router-dom';

const AbilityPage = () => {
    const [ability, setAbility] = useState([]);
    const history = useHistory();

    const params = useParams();
    const { id } = params
    const url = `https://pokeapi.co/api/v2/ability/${id}/`

    useEffect(() => {
        const getInfoAbility = async () => {
            try {
                const res = await fetch(`${url}`);
                const data = await res.json();
                setAbility(data)
            } catch (error) {
                console.error('error message')
            }
        }
        getInfoAbility()
    }, [])
    return (
        <>
            <div className={s.container}>
                <p className={s.button} onClick={() => history.goBack()}>Назад</p>
                <h1>Описание способностей:</h1>
                <div>
                    {
                        ability.effect_entries?.map((el) => {
                            return (
                                el.language.name === 'en' ? <p key={el.effect}>{el.effect}</p> : null
                            )
                        })
                    }
                </div>
            </div>
            <div className={s.container}>
                <div>
                    {
                        ability.effect_entries?.map((el) => {
                            return (
                                el.language.name === 'en' ? <p key={el.effect}>{el.short_effect}</p> : null
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AbilityPage;
