import { useState } from 'react';

interface ICharacters {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
}

interface ICharacterHook {
	(initialState: ICharacters[]): [ICharacters[], () => void]
}

const CharactersHook: ICharacterHook = (initialState = []) => {
	const [characters, setCharacters] = useState<ICharacters[]>(initialState);
	const fetchData = async () => {
		const response = await fetch('https://rickandmortyapi.com/api/character');
		const data = await response.json();
		console.log(data)
		setCharacters(data.results);
	};

	return [characters, fetchData];
}

export default CharactersHook