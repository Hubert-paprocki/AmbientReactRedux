import React from "react";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import SoundTileList from "./components/SoundTileList";
import "./scss/main.scss";
import bgimg from "./images/background-1.png";

function App() {
	return (
		<>
			<div className="background-box">
				<img src={bgimg} alt="" className="background-box__img" />
				<Logo />
				<SoundTileList />
			</div>
			<Footer />
		</>
	);
}

export default App;
