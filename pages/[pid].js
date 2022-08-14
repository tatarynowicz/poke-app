import React from "react";
import axios from "axios";
import Image from "next/image";
import Images from "../components/Images";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Pages() {
	const [pokeData, setPokeData] = useState([]);
	const router = useRouter();
	const { pid } = router.query;
	console.log(pid);
	console.log();

	const getData = async (id) => {
		// console.log(pid);

		const data = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const res = await data.data;
		setPokeData(res);
	};

	useEffect(() => {
		if (pid) {
			console.log("loaded");
			getData(pid);
			console.log(pokeData);
		}
	}, [pid]);

	const view = (
		<div>
			<h2>{pokeData.name}</h2>
			<p>{pokeData.weight}</p>

			<Image
				src={pokeData.sprites?.front_default}
				// layout='fill'
				width={100}
				height={100}
				alt='pokemon photo'
			/>
			<Images data={pokeData.sprites} />
		</div>
	);

	return <>{pokeData.name ? view : <h1>Loading</h1>}</>;
}
