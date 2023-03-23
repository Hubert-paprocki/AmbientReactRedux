import React from "react";

const VolumeSlider: React.FC = () => {
	return (
		<div>
			<input type="range" min="0" max="1" step="0.1" />
		</div>
	);
};

export default VolumeSlider;
