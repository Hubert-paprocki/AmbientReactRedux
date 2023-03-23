import { ReactNode } from "react";
import React from "react";
interface SocialMediaItemProps {
	img: ReactNode;
	link: string;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ img, link }) => {
	return (
		<a className="social-media-list__item" href={link}>
			{img}
		</a>
	);
};

export default SocialMediaItem;
