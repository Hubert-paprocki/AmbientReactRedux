import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { openSettings } from "../app/slices/appSlice";

const OpenSettingsButton = () => {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector((state) => state.app.isOpen);

	const handleClick = () => {
		dispatch(openSettings(!isOpen));
	};
	return (
		<button onClick={handleClick} className="reset-button settings-button">
			<span className="material-symbols-outlined settings">tune</span>
		</button>
	);
};

export default OpenSettingsButton;
