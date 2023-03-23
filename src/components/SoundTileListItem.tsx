import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { play } from "../app/slices/soundSlice";
import VolumeSlider from "./VolumeSlider";

interface SoundTileListItemProps {
	sound: string;
}

const SoundTileListItem: React.FC<SoundTileListItemProps> = ({ sound }) => {
	const dispatch = useAppDispatch();
	const [isPlaying, setIsPlaying] = useState(false);

	const handleOnClick = () => {
		setIsPlaying(!isPlaying);
		dispatch(play(sound));
	};

	return (
		<div className="">
			<button onClick={handleOnClick}>{sound}</button> <VolumeSlider />
		</div>
	);
};

export default SoundTileListItem;
