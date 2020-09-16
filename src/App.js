import React, { useState, useEffect } from 'react';
import s from './App.module.scss';
import Container from './components/Container/Container'
import SearchPanel from './components/SearchPanel/SearchPanel';
import CharacterList from './components/CharacterList/CharacterList';
import { Switch, Route } from 'react-router-dom';
import CharacterPage from './components/CharacterPage/CharacterPage';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=30'

const App = () => {
    const [characters, setCharacter] = useState([]);
    const [value, setValue] = useState('')

    const getAllCharacters = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const characters = data.results;
            setCharacter(characters)
        } catch (error) {
            console.error(error.message)
        }
    }

    const updateInputValue = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        getAllCharacters()
    }, [])

    return (
        <Switch>
            <Route
                path='/character/:id'
                component={CharacterPage} />

            <Route render={() => (
                <>
                    <Container>
                        <SearchPanel value={value} onChange={updateInputValue} />
                        <CharacterList searchValue={value} characters={characters} />
                    </Container>
                </>
            )}
            />
        </Switch>
    );
}

export default App;
