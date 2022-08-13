import React from "react";
import classes from "../styles/index.module.css";

export default function UserDisplay(props) {
	console.log(props.userText);
	return (
		<div className={classes.userlist}>
			<ul>
				{props.userText.map((el, index) => (
					<li key={index}>
						<h2>{el.name}</h2>
						<p>{el.text}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
