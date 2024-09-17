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
	title: "About 👤",
	view: true
}

export const skills = {
	title: "Skills ⚡",
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
	title: "Experience ✏️",
	lists: [
		{
			date: "2024.07 ~ 2024.09",
			company: "넥스트러너스",
			role: "프론트엔드 개발 스타트 캠프",
		},
		{
			date: "2024.01 ~ 2024.07",
			company: "KH 정보 교육원",
			role: "공공 데이터 융합 자바 개발자 양성과정",
		},
		{
			date: "2017.03 ~ 2022.02",
			company: "동양대학교",
			role: "게임 테크 전공",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: "Projects 💻",
	subTitle: "subtitle for projects",
	lists: [
		{
			title: "Pet Shelter",
			desc: "유기 동물에 대한 정보와 동물 입양 신청과 교육 등 다양한 기능을 포함한 웹사이트",
			image: "pet-logo.png",
			duration: "2024-08 ~ 진행중",
			skill: "#SpringBoot #OPEN API #Summernote #Java",
			url: "https://github.com/EverymanWannabe/petShelter"
		},
		{
			title: "어디로 Go?",
			desc: "다양한 여행 관련 정보를 제공하고 여행지 선택에 도움을 주는 웹사이트",
			image: "wherego-logo.png",
			duration: "2024-06-17 ~ 2024-07-17 (4주)",
			skill: "#Spring Legacy #OPEN API #JavaScript #Java",
			url: "https://github.com/yksr7948/wherego-Taeung"
		},
		{
			title: "GbangE",
			desc: "지방에서 열리는 마라톤 대회 정보를 제공하는 웹사이트",
			image: "Gbange-logo.png",
			duration: "2024-05-01 ~ 2024-05-17 (2주)",
			skill: "#Eclipse #JavaScript #Java",
			url: "https://github.com/yksr7948/PJT_GBangE-Taeung"
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
	view: true
}