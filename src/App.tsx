import React from "react";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import SoundTileList from "./components/soundTiles/SoundTileList";
import "./scss/main.scss";
import bgimg1 from "./images/background-1.png";
import bgimg2 from "./images/background-2.png";
import bgimg3 from "./images/background-3.png";
import ScrollDownButton from "./components/ScrollDownButton";
import OpenSettingsButton from "./components/OpenSettingsButton";
import { useAppSelector } from "./app/hooks";
import ApperanceSettings from "./components/settings/ApperanceSettings";

function App() {
	const isOpen = useAppSelector((state) => state.app.isOpen);
	const checkimg = useAppSelector((state) => state.app.backgroundImage);
	let img;
	if (checkimg === "bgimg1") {
		img = bgimg1;
	} else if (checkimg === "bgimg2") {
		img = bgimg2;
	}
	if (checkimg === "bgimg3") {
		img = bgimg3;
	}

	return (
		<>
			<div className="background-box">
				<OpenSettingsButton />
				{isOpen && <ApperanceSettings />}
				<img src={img} alt="" className="background-box__img" loading="lazy" />
				<Logo />
				<SoundTileList />
				<ScrollDownButton />
			</div>
			<Footer />
		</>
	);
}

export default App;
