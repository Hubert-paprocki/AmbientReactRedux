import React from "react";
import { Content } from "./Content";
import SoundTileListItem from "./SoundTileListItem";

const SoundTileList: React.FC = () => {
	const renderedSoundTileList = Content.map((item) => {
		return (
			<SoundTileListItem sound={item.sound} key={item.id} icon={item.icon} />
		);
	});
	return <main className="sound-menu">{renderedSoundTileList}</main>;
};

export default SoundTileList;
