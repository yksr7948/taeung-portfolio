import emoji from 'react-easy-emoji';

export const greeting = {
	username: "Taeung's Portfolio",
	title: '신입 개발자 김태웅의 포트폴리오 입니다.',
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/yksr7948',
};

export const aboutMe = {
	title: "ABOUT ME",
	view: true
}

export const skills = {
	title: "Skills",
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	front_lists: [
		{devicon: "devicon-html5-plain colored", text: "HTML5"},
		{devicon: "devicon-css3-plain colored", text: "CSS3"},
		{devicon: "devicon-javascript-plain colored", text: "JS"},
		{devicon: "devicon-react-original colored", text: "React"},
		{devicon: "devicon-jquery-plain colored", text: "JQuery"}
	],
	back_lists: [
		{devicon: "devicon-java-plain colored", text: "JAVA"},
		{devicon: "devicon-oracle-original colored", text: "Oracle"},
		{devicon: "devicon-nodejs-plain colored", text: "Node.js"},
		{devicon: "devicon-json-plain colored", text: "JSON"}
	],
	tool_lists: [
		{devicon: "devicon-eclipse-plain", text: "Eclipse"},
		{devicon: "devicon-vscode-plain colored", text: "VSCode"},
		{devicon: "devicon-spring-original colored", text: "Spring"},
		{devicon: "devicon-spring-original", text: "Spring Boot"}
	],
	collabo_lists: [
		{devicon: "devicon-github-original", text: "GitHub"},
		{devicon: "devicon-slack-plain", text: "slack"}
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2018.03~",
			company: "Google",
			role: "Front-End Developer",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "subtitle for projects",
	lists: [
		{
			title: "Project1",
			desc: "very very very very very very very very very very very very very very long very long description for clamp testing",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "subtitle for contact",
	introduce: emoji("your introduce❤"),
	view: true
}