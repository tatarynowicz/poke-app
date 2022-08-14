import axios from "axios";
import Card from "../componentS/Card";
import classes from "../styles/card.module.css";

import { useState, useEffect } from "react";

export default function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [pokeUrl, setPokemonUrl] = useState(
		"https://pokeapi.co/api/v2/pokemon?limit=20"
	);

	const getAllPokemons = async () => {
		const data = await axios(pokeUrl);
		const res = data.data;
		setPokemonUrl(res.next);

		const pokemonAll = async (pokemon) => {
			pokemon.forEach(async (element) => {
				const data = await axios(element.url);
				const res = data.data;

				setPokemonList((prev) => [...prev, res]);
			});
		};

		pokemonAll(res.results);
	};

	useEffect(() => {
		getAllPokemons();
	}, []);

	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Pokemon</h2>
			<div className={classes.cards}>
				{pokemonList.map((el, index) => (
					<Card data={el} key={index} />
				))}
			</div>
			<button onClick={getAllPokemons}>Next Pokemons</button>
		</div>
	);
}
