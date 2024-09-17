import React from 'react';
import './Header.css';
import { greeting, aboutMe, skills, experience, projects, contactInfo } from '../../portfolio';

function Header() {
	
	const onClickMenu = function(): void {
		if (window.innerWidth < 768) {
			let navMenu = document.getElementById("toggle-nav");
			if (!navMenu) throw new Error("HTML Error!");
			if (navMenu.className === "nav-menu") {
				navMenu.className += " responsive";
			} else {
				navMenu.className = "nav-menu";
			}
		}
	}

	return (
		<header className="header header--section">
			<div className="inner clearfix">

				<div className="header-logo">
					<span>&lt;</span>
					<a href="#">{greeting.username}</a>
					<span>/&gt;</span>
				</div>
				
				<div className="icon">
					<a href="#toggle-nav" className="icon fas fa-bars" onClick={onClickMenu}></a>
				</div>

				<ul className="nav-menu" id="toggle-nav">
					{greeting.view && <li className="nav-list">
						<a href="#" onClick={onClickMenu}>
							Home
						</a>
					</li>}
					{aboutMe.view && <li className="nav-list">
						<a href="#aboutMe" onClick={onClickMenu}>
							About
						</a>
					</li>}
					{skills.view && <li className="nav-list">
						<a href="#skills" onClick={onClickMenu}>
							Skills
						</a>
					</li>}
					{experience.view && <li className="nav-list" onClick={onClickMenu}>
						<a href="#experience">
							Experience
						</a>
					</li>}
					{projects.view && <li className="nav-list" onClick={onClickMenu}>
						<a href="#project">
							Projects
						</a>
					</li>}
					{contactInfo.view && <li className="nav-list" onClick={onClickMenu}>
						<a href="#contact">
							Contact Me
						</a>
					</li>}
				</ul>

			</div>
		</header>
	);
}
export default Header;