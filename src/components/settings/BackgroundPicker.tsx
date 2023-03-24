import React from "react";
import btnimg1 from "../../images/miniatures/background-1-mini.png";
import btnimg2 from "../../images/miniatures/background-2-mini.png";
import btnimg3 from "../../images/miniatures/background-3-mini.png";
import { useAppDispatch } from "../../app/hooks";
import { changeBackgroundImage } from "../../app/slices/appSlice";

const BackgroundPicker = () => {
	const dispatch = useAppDispatch();
	const handleBackgroundChange = (image: string) => {
		dispatch(changeBackgroundImage(image));
	};

	return (
		<>
			<h3>Pick Your Background</h3>
			<div className="settings-box__background-picker">
				<button
					className="settings-box__image-button"
					onClick={() => handleBackgroundChange("bgimg1")}
				>
					<img
						loading="lazy"
						src={btnimg1}
						alt="background"
						className="settings-box__image-button__photo"
					/>
				</button>
				<button
					className="settings-box__image-button"
					onClick={() => handleBackgroundChange("bgimg2")}
				>
					<img
						loading="lazy"
						src={btnimg2}
						alt="background"
						className="settings-box__image-button__photo"
					/>
				</button>
				<button
					className="settings-box__image-button"
					onClick={() => handleBackgroundChange("bgimg3")}
				>
					<img
						loading="lazy"
						src={btnimg3}
						alt="background"
						className="settings-box__image-button__photo"
					/>
				</button>
			</div>
		</>
	);
};

export default BackgroundPicker;
