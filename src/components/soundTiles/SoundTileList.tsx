import React from "react";
import { Content } from "./Content";
import SoundTileListItem from "./SoundTileListItem";
import { useAppSelector } from "../../app/hooks";

const SoundTileList: React.FC = () => {
	const isAlternativeAppearance = useAppSelector(
		(state) => state.app.isAlternative
	);
	const renderedSoundTileList = Content.map((item) => {
		return (
			<SoundTileListItem sound={item.sound} key={item.id} icon={item.icon} />
		);
	});
	return (
		<main
			className={
				isAlternativeAppearance ? "sound-menu__alternative" : "sound-menu"
			}
		>
			{renderedSoundTileList}
		</main>
	);
};

export default SoundTileList;
