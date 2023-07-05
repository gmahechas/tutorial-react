import { useEffect } from 'react';
import CharactersHook from '../../hooks/Characters.hook';

const List = () => {
    const [characters, fetchData] = CharactersHook([]);
    useEffect(() => {
        fetchData();
    }, []);

    const listItems = () => characters.map((character) => (
        <li key={character.id}>{character.name}</li>
    ));

    return <>{listItems()}</>;
};

export default List;
