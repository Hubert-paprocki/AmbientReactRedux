import React from "react";
import SocialMediaList from "./SocialMediaList";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__description">
				<p className="footer__description-content">
					Ambient is a website designed to help people focus while they study or
					work. The site features a variety of ambient sounds that users can
					listen to in the background while they complete their tasks. These
					sounds include nature sounds such as birds singing, waterfalls, and
					rain, as well as other calming sounds like white noise and ambient
					music.
				</p>
			</div>
			<div className="footer__credits">
				<p className="footer__creator">
					Copyright © 2023 <span className="name">Hubert Paprocki</span> All
					rights reserved.
				</p>
				<SocialMediaList />
			</div>
		</footer>
	);
};

export default Footer;
