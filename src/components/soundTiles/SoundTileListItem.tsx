import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { play, changeVol } from "../../app/slices/soundSlice";
import { Slider } from "@mui/material";

interface SoundTileListItemProps {
	sound: string;
	icon: string;
}

const SoundTileListItem: React.FC<SoundTileListItemProps> = ({
	sound,
	icon,
}) => {
	const dispatch = useAppDispatch();

	const isAlternativeAppearance = useAppSelector(
		(state) => state.app.isAlternative
	);

	const isPlaying = useAppSelector(
		(state) => state.sound[sound]?.isPlaying || false
	);

	const handleOnClick = () => {
		dispatch(play(sound));
	};

	const handleOnChange = (event: Event, newValue: number | number[]) => {
		const newVolume = typeof newValue === "number" ? newValue : newValue[0];

		dispatch(changeVol({ sound, volume: newVolume }));
	};

	return (
		<div
			className={isAlternativeAppearance ? "play-box__alternative" : "play-box"}
		>
			<button onClick={handleOnClick} className="reset-button">
				<span
					className={`material-symbols-outlined  ${isPlaying ? "active" : ""} ${
						isAlternativeAppearance
							? "play-box__btn--ico__alternative"
							: "play-box__btn--ico"
					}`}
				>
					{icon}
				</span>
			</button>
			{isAlternativeAppearance ? (
				<Slider
					onChange={handleOnChange}
					defaultValue={0.5}
					color="secondary"
					min={0}
					max={1}
					step={0.1}
					aria-label="Volume"
					className={`volume-slider__alternative ${
						isPlaying ? "active-slider" : ""
					}`}
					orientation={"vertical"}
				/>
			) : (
				<Slider
					onChange={handleOnChange}
					defaultValue={0.5}
					color="secondary"
					min={0}
					max={1}
					step={0.1}
					aria-label="Volume"
					className={`volume-slider ${isPlaying ? "active-slider" : ""}`}
				/>
			)}
		</div>
	);
};

export default SoundTileListItem;
