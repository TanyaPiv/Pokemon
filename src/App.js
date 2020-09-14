import React, {useState, useEffect} from 'react';
import s from './App.module.scss';
import Container from './components/Container/Container'
import SearchPanel from './components/SearchPanel/SearchPanel';
import CharacterList from './components/CharacterList/CharacterList';


const url = 'https://pokeapi.co/api/v2/pokemon?limit=30'

const App = () => {
    const [characters, setCharacter] = useState([]);

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

    useEffect(() => {
        getAllCharacters()
    }, [])
    return (
      <Container>
          <SearchPanel/>
          <CharacterList characters={characters}/>
      </Container>
    );
}

export default App;
