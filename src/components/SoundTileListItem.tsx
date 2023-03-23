import React from "react";
import { useAppDispatch } from "../app/hooks";
import { play, changeVol } from "../app/slices/soundSlice";
import { Slider } from "@mui/material";

interface SoundTileListItemProps {
	sound: string;
}

const SoundTileListItem: React.FC<SoundTileListItemProps> = ({ sound }) => {
	const dispatch = useAppDispatch();

	const handleOnClick = () => {
		dispatch(play(sound));
	};

	const handleOnChange = (event: Event, newValue: number | number[]) => {
		const newVolume = typeof newValue === "number" ? newValue : newValue[0];

		dispatch(changeVol({ sound, volume: newVolume }));
	};

	return (
		<div className="">
			<button onClick={handleOnClick}>{sound}</button>
			<Slider
				onChange={handleOnChange}
				defaultValue={0.5}
				color="secondary"
				min={0}
				sx={{ height: `150px` }}
				orientation="vertical"
				max={1}
				step={0.1}
				aria-label="Volume"
			/>
		</div>
	);
};

export default SoundTileListItem;
