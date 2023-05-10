import React from "react";
import memesData from "../MemesData.js";

export default function Meme() {

	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}
	function getText(event) {
		setMeme((prevMeme) => {
			return { ...prevMeme, [event.target.name]: event.target.value };
		});
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					onChange={getText}
					placeholder="Top text"
					className="form--input"
					name="topText"
				/>
				<input
					type="text"
					onChange={getText}
					placeholder="Bottom text"
					className="form--input"
					name="bottomText"
				/>
				<button className="form--button" onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} className="meme--image" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
