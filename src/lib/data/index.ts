import type { IHomepageData, ILayoutData } from '$lib/types';

import ProfilePic from '$lib/images/robel.jpg';
import Image1 from '$lib/images/halcyon.avif';
import Image2 from '$lib/images/demo.avif';
import Image3 from '$lib/images/course-card.avif';
import Facebook from '$lib/components/Svg/Facebook.svelte';
import Github from '$lib/components/Svg/Github.svelte';
import Instagram from '$lib/components/Svg/Instagram.svelte';
import Linkedin from '$lib/components/Svg/Linkedin.svelte';
import Twitter from '$lib/components/Svg/Twitter.svelte';
import Whatsapp from '$lib/components/Svg/Whatsapp.svelte';
import Aaronnbrock from '$lib/images/porjects/aaronbrock.com.png';
import Bonabotse from '$lib/images/porjects/bonabotse.co.za.png';
import DrBerg from '$lib/images/porjects/drberg.com.png';

export const homepageData: IHomepageData = {
	hero: {
		topTitle: 'Hi, my name is',
		name: 'Mohammad Robel.',
		subtitle: 'I build things for the web.',
		description:
			'I’m a Web Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Rebelslab B.V.',
		email: {
			label: 'rubel.contact@gmail.com',
			url: 'rubel.contact@gmail.com'
		}
	},
	about: {
		title: 'About Me',
		image: {
			alt: 'Mohammad Robel',
			src: ProfilePic
		},
		description: [
			// 'Hello! My name is Mohammad Robel and I enjoy creating things that live on the internet. My interest in web development started back in 2018',
			// 'Fast-forward to today, and I’ve had the privilege of working at a software development agency, a start-up. My main focus these days is building accessible, inclusive products and digital experiences at Rebelslab B.V. for a variety of clients.',
			"👋 Hi there! I'm Mohammad Robel, a passionate and creative frontend web developer with a love for crafting immersive digital experiences. With a keen eye for detail and a deep understanding of modern web technologies, I specialize in transforming ideas into visually stunning and user-friendly websites.",

			"I thrive on the excitement of staying up-to-date with the latest industry trends and best practices, always seeking to deliver top-notch solutions that exceed expectations. Whether it's crafting pixel-perfect designs or optimizing website performance, I'm driven by a dedication to creating seamless, responsive, and accessible web solutions.",

			"When I'm not coding, you can find me exploring new design trends, learning about emerging frontend frameworks, or collaborating with fellow developers on exciting projects. Let's connect and create something amazing together!",

			'Here are a few technologies I’ve been working with recently:'
		],
		expertiseAreas: [
			{
				label: 'JavaScript',
				url: 'https://www.javascript.com'
			},
			{
				label: 'TypeScript',
				url: 'https://www.typescriptlang.org'
			},
			{
				label: 'React',
				url: 'https://reactjs.org'
			},
			{
				label: 'Next.js',
				url: 'https://nextjs.org'
			},
			{
				label: 'Vue',
				url: 'https://vuejs.org'
			},
			{
				label: 'Nuxt.js',
				url: 'https://nuxt.com'
			},
			{
				label: 'Svelte',
				url: 'https://svelte.dev'
			},
			{
				label: 'SvelteKit',
				url: 'https://kit.svelte.dev'
			},
			{
				label: 'Tailwind CSS',
				url: 'https://tailwindcss.com'
			},
			{
				label: 'Strapi',
				url: 'https://strapi.io'
			},
			{
				label: 'Node.js',
				url: 'https://nodejs.org'
			},
			{
				label: 'Express',
				url: 'https://expressjs.com'
			}
		]
	},
	experience: {
		title: 'Where I’ve Worked',
		experiences: [
			{
				company: 'Rebelslab',
				website: 'https://rebelslab.com',
				position: 'Frontend Engineer',
				date: 'Nov 2022 - Present',
				workingAreas: [
					'Write modern, performant, maintainable code for a diverse array of client and internal projects',
					'Work with a variety of different platforms, frameworks, and content management systems such as JavaScript, TypeScript, Vue, React, Svelte, Nuxt.js, Next.js, SvelteKit, Strapi',
					'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
					'Privileged of utilizing a wide range of cutting-edge technologies to create exceptional digital solutions.',

					// 'At Rebelslab B.V., we foster a collaborative and forward-thinking culture that encourages creativity and continuous learning. I am grateful to be part of a team of talented and passionate colleagues who share a common vision for delivering excellence in web development.',

					'Working with JavaScript, TypeScript, Vue, React, Svelte, Nuxt.js, Next.js, SvelteKit, and Strapi, among other technologies that empowered me to build captivating and feature-rich websites and web applications that cater to the unique needs of our clients.',

					'The collaborative spirit within the company has taught me the value of effective teamwork, communication, and problem-solving. Together, we tackle challenging projects, exchanging ideas and knowledge to create solutions that push the boundaries of frontend web development.'

					// 'One of the most rewarding aspects of working at Rebelslab B.V. is the positive impact our projects have on users. From crafting seamless user interfaces to optimizing website performance, we take pride in providing engaging and user-friendly experiences that leave a lasting impression.',

					// 'The growth opportunities offered by Rebelslab B.V. have been instrumental in refining my skills as a frontend web developer. By staying at the forefront of technology trends and design practices, I continuously strive to elevate the quality and efficiency of our projects.',

					// "I genuinely cherish the relationships I've built with my colleagues, who not only inspire me professionally but also create a supportive and enjoyable work atmosphere. Their mentorship and camaraderie have played a significant role in my personal and career development.",

					// 'As I continue my journey with Rebelslab B.V., I am excited about the possibilities that lie ahead. I look forward to taking on new challenges, contributing to groundbreaking projects, and collaborating with incredible minds to create exceptional web experiences.'
				]
			},
			{
				company: 'SR Web Studio',
				website: 'https://srwebstudio.com',
				position: 'Web Developer',
				date: 'Jan 2020 - Present',
				workingAreas: [
					'As a Frontend Web Developer at SR Web Studio, I have had the incredible opportunity to contribute to the creation of stunning websites and web applications using a diverse set of cutting-edge technologies. My role at SR Web Studio has allowed me to leverage my skills and expertise in JavaScript, TypeScript, Vue, React, Svelte, Nuxt.js, Next.js, SvelteKit, and Strapi to craft exceptional digital experiences.',

					"Working in a collaborative and innovative environment, I take pride in translating design concepts into fully functional and visually appealing user interfaces. From dynamic single-page applications to content-rich websites, I've honed my abilities to meet the unique requirements of each project and deliver top-notch results.",

					"Throughout my time at SR Web Studio, I've been deeply involved in projects that challenge and inspire me. By staying up-to-date with the latest frontend technologies and design trends, I strive to provide seamless user experiences that exceed expectations.",

					"Collaborating with talented designers, developers, and content creators, I've learned the importance of effective teamwork and the value of combining creativity with technical excellence. I am grateful for the opportunities to grow both professionally and personally in this dynamic and fast-paced environment.",

					"At SR Web Studio, I've not only honed my technical skills but also cultivated a passion for creating captivating digital solutions that leave a lasting impact on users. It has been an enriching journey, and I'm excited to continue exploring new possibilities in frontend web development.",

					"Let's connect and explore how my skills and experience can bring value to your web projects. I'm eager to embark on new challenges and collaborate on exciting opportunities to create exceptional web experiences together."
				]
			}
		]
	},
	featuredProjects: {
		title: 'Some Things I’ve Built',
		projects: [
			{
				tag: 'Featured',
				name: 'Aaron N Brock Portfolio',
				description:
					"The Aaron N. Brock Portfolio Website is a visually stunning showcase of the client's work and accomplishments. Built with cutting-edge technologies, including SvelteKit, Typescript, and Tailwind CSS, the website offers a seamless and captivating user experience. The project's primary focus was to create a modern and dynamic portfolio that not only highlights the client's expertise but also stands out as a work of art in itself.One of the standout features of the website is the captivating SVG animations that bring life to the user interface. These animations enhance the visual appeal and leave a lasting impression on visitors. The challenge of implementing background blob SVGs was masterfully conquered, creating a unique and eye-catching backdrop that complements the overall design.",
				image: {
					alt: 'Aaron N Brock Portfolio',
					src: Aaronnbrock
				},
				url: 'https://aaronnbrock.com',
				github: '',
				madeAt: 'Fiverr',
				technologies: ['SvelteKit', 'TailwindCSS', 'TypeScript', 'Blob SVGs']
			},
			{
				tag: 'Featured',
				name: 'Bona Botse Website',
				description:
					"The Bona Botse Motivation and Mind Freshness Training Website is an inspiring platform dedicated to offering top-notch training and coaching services in motivation and mental well-being. Built with SvelteKit, Typescript, and Tailwind CSS, the website delivers a seamless user experience and a visually captivating interface. The project's main objective was to create an empowering website that effectively communicates the importance of motivation and maintaining a fresh and positive mindset.",
				image: {
					alt: 'Bona Botse Website',
					src: Bonabotse
				},
				url: 'https://bonabotse.co.za',
				github: '',
				madeAt: 'Fiverr',
				technologies: ['SvelteKit', 'TailwindCSS', 'TypeScript']
			},
			{
				tag: 'Featured',
				name: 'Dr. Berg Website',
				description:
					"Dr. Berg's Health Products and Keto Diet Website is a comprehensive platform that offers a wide range of health products, valuable insights on the keto diet, and information on various health issues. Developed with SvelteKit, Typescript, and Tailwind CSS, the website delivers a seamless and informative user experience. The project's primary objective was to create an all-encompassing website that provides users with a holistic approach to health and wellness. The Dr. Berg's Health Products and Keto Diet Website exemplifies your expertise in creating an encompassing and dynamic web platform. By skillfully integrating SvelteKit, Typescript, Tailwind CSS, and APIs, you've crafted a website that provides valuable health insights, a diverse range of products, and interactive BMI calculators to support users' health and wellness journeys. This project showcases your dedication to building user-friendly and informative web experiences that contribute to a healthier lifestyle",
				image: {
					alt: 'Dr. Berg Website',
					src: DrBerg
				},
				url: 'https://www.drberg.com',
				github: '',
				madeAt: 'Fiverr',
				technologies: ['SvelteKit', 'TailwindCSS', 'TypeScript']
			},
			{
				tag: 'Featured Project',
				name: 'Halcyon Theme',
				description:
					'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control Atom Package Manager, and npm.',
				image: {
					alt: 'Halcyon Theme for VS Code, Sublime Text, Atom, iTerm, and more.',
					src: Image1
				},
				url: 'test.com',
				github: 'https://github.com/Muhammad-Rubel',
				madeAt: '',
				technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper']
			},
			{
				tag: 'Featured Project',
				name: 'Spotify Profile',
				description:
					'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
				image: {
					alt: 'Spotify Profile',
					src: Image2
				},
				url: 'test.com',
				github: 'https://github.com/Muhammad-Rubel',
				madeAt: '',
				technologies: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku']
			},
			{
				tag: 'Featured Project',
				name: 'Build a Spotify Connected App',
				description:
					"Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
				image: {
					alt: 'Build a Spotify Connected App',
					src: Image3
				},
				url: 'test.com',
				github: 'https://github.com/Muhammad-Rubel',
				madeAt: '',
				technologies: ['React', 'Express', 'Spotify API', 'Styled Components']
			}
		]
	},
	noteworthyProjects: {
		title: 'Other Noteworthy Projects',
		viewAchiveLink: {
			label: 'View the archive',
			url: '#work'
		},
		projects: [
			{
				tag: 'Featured Project',
				name: 'Halcyon Theme',
				description:
					'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace',
				image: {
					alt: 'Halcyon Theme for VS Code, Sublime Text, Atom, iTerm, and more.',
					src: Image1
				},
				url: 'https://github.com/Muhammad-Rubel',
				github: 'https://github.com/Muhammad-Rubel',
				technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper']
			},
			{
				tag: 'Featured Project',
				name: 'Spotify Profile',
				description:
					'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
				image: {
					alt: 'Spotify Profile',
					src: Image2
				},
				url: 'https://github.com/Muhammad-Rubel',
				github: 'https://github.com/Muhammad-Rubel',
				technologies: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku']
			},
			{
				tag: 'Featured Project',
				name: 'Build a Spotify Connected App',
				description:
					"Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
				image: {
					alt: 'Build a Spotify Connected App',
					src: Image3
				},
				url: 'https://github.com/Muhammad-Rubel',
				github: 'https://github.com/Muhammad-Rubel',
				technologies: ['React', 'Express', 'Spotify API', 'Styled Components']
			},
			{
				tag: 'Featured Project',
				name: 'Halcyon Theme',
				description:
					'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
				image: {
					alt: 'Halcyon Theme for VS Code, Sublime Text, Atom, iTerm, and more.',
					src: Image1
				},
				url: 'https://github.com/Muhammad-Rubel',
				github: 'https://github.com/Muhammad-Rubel',
				technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper']
			},
			{
				tag: 'Featured Project',
				name: 'Spotify Profile',
				description:
					'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
				image: {
					alt: 'Spotify Profile',
					src: Image2
				},
				url: 'https://github.com/Muhammad-Rubel',
				github: 'https://github.com/Muhammad-Rubel',
				technologies: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku']
			},
			{
				tag: 'Featured Project',
				name: 'Build a Spotify Connected App',
				description:
					"Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
				image: {
					alt: 'Build a Spotify Connected App',
					src: Image3
				},
				url: 'https://github.com/Muhammad-Rubel',
				github: 'https://github.com/Muhammad-Rubel',
				technologies: ['React', 'Express', 'Spotify API', 'Styled Components']
			}
		]
	},
	contact: {
		title: 'Contact',
		description:
			'Dropping a line to say g’day, ask for my resume or see if we can build something amazing together? I’d love to hear from you!',
		formTitle: 'Fill in your info in the form below and I look forward to hearing from you!',
		socialMediaTitle: 'Feeling social? Find me on these online spaces too!',
		socialMedia: [
			{
				link: 'https://github.com/Muhammad-Rubel',
				icon: Github
			},
			{
				link: 'https://www.linkedin.com/in/mohammad-rubel',
				icon: Linkedin
			},
			{
				link: 'https://www.facebook.com/md.robel11',
				icon: Facebook
			}
			// {
			// 	link: '',
			// 	icon: Instagram
			// },

			// {
			// 	link: '',
			// 	icon: Twitter
			// },
			// {
			// 	link: '',
			// 	icon: Whatsapp
			// }
		],
		buttonLabel: 'Send Email',
		email: {
			label: 'rubel.contact@gmail.com',
			url: 'rubel.contact@gmail.com'
		}
	}
};

export const layoutData: ILayoutData = {
	header: {
		navItems: [
			{
				label: 'About',
				url: '#about'
			},
			{
				label: 'Experience',
				url: '#experience'
			},
			{
				label: 'Work',
				url: '#work'
			},
			{
				label: 'contact',
				url: '#contact'
			}
			// {
			// 	label: 'Resume',
			// 	url: ''
			// }
		]
	},
	footer: 'Designed & coded with 💙 by Mohammad Robel'
};
