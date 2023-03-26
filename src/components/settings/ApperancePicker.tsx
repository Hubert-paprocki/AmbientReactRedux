import { Switch } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { appAppearance } from "../../app/slices/appSlice";

const AppearancePicker = () => {
	const dispatch = useAppDispatch();
	const isAlternativeAppearance = useAppSelector(
		(state) => state.app.isAlternative
	);

	const handleChange = () => {
		dispatch(appAppearance(!isAlternativeAppearance));
	};

	return (
		<div className="settings-box__appearance-picker">
			<div>
				<p>Different app appearance:</p>
				<p className="small-text">Choose between tiles or audio mixer look</p>
			</div>
			<Switch
				checked={isAlternativeAppearance}
				onChange={handleChange}
				color={"success"}
				sx={{
					"& .MuiSwitch-track": {
						borderRadius: "20px",
						backgroundColor: "red",
					},
				}}
			/>
		</div>
	);
};

export default AppearancePicker;
