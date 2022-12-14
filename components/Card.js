import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "../styles/card.module.css";
import Image from "next/image";

export default function Card(props) {
	const router = useRouter();
	const { data } = props;
	const [hover, setHover] = useState(true);
	// console.log(data);

	const name = (name) => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	};

	const detailsView = (
		<>
			<h2>{name(data.name)}</h2>

			<p>Weight: {data.weight}</p>
			<p>Height: {data.height}</p>
			<ul>
				<h3>{data.types.length > 1 ? "Types:" : "Type:"}</h3>

				{data.types.map((el, index) => (
					<li key={index}>{name(el.type.name)}</li>
				))}
			</ul>
			<div className={classes.abiliti}>
				<h3>Abilities</h3>

				<ul>
					{data.abilities.map((el, index) => (
						<li key={index}>{name(el.ability.name)}</li>
					))}
				</ul>
			</div>
		</>
	);

	console.log(`${classes.card}+${data.types[0].type.name}`);

	return (
		<Link href={`/${data.name}`}>
			{/* {!hover ? (
				
			) : ( */}

			<div className={`${classes.card} ${data.types[0].type.name}`}>
				<div className={classes.back}>
					<div>{detailsView}</div>
				</div>
				<div className={classes.front}>
					<h2>{name(data.name)}</h2>

					<Image
						src={data.sprites.front_default}
						// layout='fill'
						width={100}
						height={100}
						alt='pokemon photo'
					/>
				</div>
			</div>

			{/* )} */}
		</Link>
	);
}
