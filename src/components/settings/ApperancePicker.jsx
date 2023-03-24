import { Switch } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { appAppearance } from "../../app/slices/appSlice";

const AppearancePicker = () => {
	const dispatch = useAppDispatch();
	const isAlternative = useAppSelector((state) => state.app.isAlternative);

	const handleChange = () => {
		dispatch(appAppearance(!isAlternative));
	};
	return (
		<>
			<p>Different app appearance:</p>

			<Switch onChange={handleChange} />
		</>
	);
};

export default AppearancePicker;
