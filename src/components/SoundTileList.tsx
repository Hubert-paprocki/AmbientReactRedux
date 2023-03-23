import React from "react";
import { Content } from "./Content";
import SoundTileListItem from "./SoundTileListItem";

const SoundTileList: React.FC = () => {
	const renderedSoundTileList = Content.map((item) => {
		return (
			<div key={item.id}>
				<SoundTileListItem sound={item.sound} />
			</div>
		);
	});
	return (
		<div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto my-12 flex-row gap-x-5">
			{renderedSoundTileList}
		</div>
	);
};

export default SoundTileList;
