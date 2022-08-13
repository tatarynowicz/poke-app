import UserInput from "../components/UserInput";
import UserDisplay from "../components/UserDisplay";
import classes from "../styles/index.module.css";
import { useState } from "react";

export default function Home() {
	const [userText, setUserText] = useState([
		{ name: "Michal", text: "Hello" },
		{ name: "Klaudia", text: "Hi" },
	]);
	console.log(userText);

	return (
		<div className={classes.container}>
			<UserDisplay userText={userText} />
			<UserInput textHandler={setUserText} userText={userText} />
		</div>
	);
}
