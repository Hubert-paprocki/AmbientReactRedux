import React from "react";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import SoundTileList from "./components/SoundTileList";
import "./App.scss";

function App() {
	return (
		<>
			<div className="App">
				<Logo />
				<SoundTileList />
			</div>
			<Footer />
		</>
	);
}

export default App;
