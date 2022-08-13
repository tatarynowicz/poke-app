import React from "react";
import { useState } from "react";
import classes from "../styles/index.module.css";

export default function UserInput(props) {
	const [userInput, setUserInput] = useState("Type Your name");
	const [userText, setUserText] = useState("Type Your text");

	console.log(props);
	// console.log(textHandler.textHandler);

	class User {
		constructor(userName, text) {
			this.name = userName;
			this.text = text;
		}
	}

	const submitHandler = (e) => {
		e.preventDefault();
		const newUser = new User(userInput, userText);
		props.textHandler([...props.userText, newUser]);
		setUserInput("");
		setUserText("");
	};

	const clickHandler = (e) => {
		e.preventDefault();
		setUserInput("");
	};

	return (
		<>
			<form onSubmit={submitHandler} className={classes.userform}>
				<input
					className={classes.userinput}
					type='text'
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onClick={clickHandler}
				/>
				<input
					className={classes.userinput}
					type='text'
					value={userText}
					onChange={(e) => setUserText(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
}
