import React from 'react';
import Header from './Header/Header';
import Hello from './Hello/Hello';
import About from './About/AboutMe';
import Skill from './Skill/Skill';
import Top from './topButton/Top';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import { greeting, aboutMe, skills, experience, projects, contactInfo } from '../portfolio';

function Main() {
	return (
		<div className="root">
			<Header />
			{greeting.view && <Hello />}
			{aboutMe.view && <About />}
			{skills.view && <Skill />}
			{experience.view && <Experience />}
			{projects.view && <Project />}
			{contactInfo.view && <Contact />}
			<Top />
		</div>
	);
}
export default Main;