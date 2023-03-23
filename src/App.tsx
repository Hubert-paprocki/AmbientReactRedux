import React from "react";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import SoundTileList from "./components/SoundTileList";
import "./scss/main.scss";
import bgimg from "./images/background-1.png";
import ScrollDownButton from "./components/ScrollDownButton";

function App() {
	return (
		<>
			<div className="background-box">
				<img src={bgimg} alt="" className="background-box__img" />
				<Logo />
				<SoundTileList />
				<ScrollDownButton />
			</div>
			<Footer />
		</>
	);
}

export default App;
