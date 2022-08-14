import React from "react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function Images(props) {
	const images = Object.values(props.data);
	const [image, setImage] = useState([]);
	const { data } = props;

	const getAllPhotos = () => {
		for (let i = 0; i < images.length; i++) {
			if (typeof images[i] === "string") {
				setImage((prev) => [...prev, images[i]]);
			}
		}
	};

	useEffect(() => {
		getAllPhotos();
	}, []);

	return (
		<>
			<div>Photos</div>
			{image.map((el, index) => (
				<Image
					src={el}
					key={index}
					// layout='fill'
					width={100}
					height={100}
					alt='pokemon photo'
				/>
			))}
		</>
	);
}
