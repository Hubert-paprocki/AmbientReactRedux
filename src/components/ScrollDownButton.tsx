import React from "react";
const handleScrollDown = () => {
	window.scroll(0, document.body.scrollHeight);
};
const ScrollDownButton = () => {
	return (
		<button className="reset-button" onClick={handleScrollDown}>
			<span className="material-symbols-outlined expand_more">expand_more</span>
		</button>
	);
};

export default ScrollDownButton;
