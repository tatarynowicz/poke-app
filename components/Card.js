import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "../styles/card.module.css";
import Image from "next/image";

export default function Card(props) {
	const router = useRouter();
	const { data } = props;

	const name = (name) => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	};

	return (
		<Link href={`/${data.name}`}>
			<div className={classes.card}>
				<h2>{name(data.name)}</h2>

				<Image
					src={data.sprites.front_default}
					// layout='fill'
					width={100}
					height={100}
					alt='pokemon photo'
				/>
				<p>{data.weight}</p>
				<p>{data.height}</p>
				<p>{name(data.types[0].type.name)}</p>
				<div className={classes.abiliti}>
					<h3>Abilities</h3>
					<ul>
						{data.abilities.map((el, index) => (
							<li key={index}>{name(el.ability.name)}</li>
						))}
					</ul>
				</div>
			</div>
		</Link>
	);
}
