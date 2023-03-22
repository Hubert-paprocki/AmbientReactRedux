import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { play } from "../app/slices/soundSlice";

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

	return <button onClick={handleOnClick}>{sound}</button>;
};

export default SoundTileListItem;
