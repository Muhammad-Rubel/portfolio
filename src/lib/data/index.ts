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

export const homepageData: IHomepageData = {
	hero: {
		topTitle: 'Hi, my name is',
		name: 'Mohammad Robel.',
		subtitle: 'I build things for the web.',
		description:
			'I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.',
		myWorkbtn: {
			label: 'Check out my work',
			url: '/#work'
		}
	},
	about: {
		title: 'About Me',
		image: {
			alt: 'Mohammad Robel',
			src: ProfilePic
		},
		description: [
			'Hello! My name is Mohammad Robel and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!',
			'Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.',
			'I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.',
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
					'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
					'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
				]
			},
			{
				company: 'SR Web Studio',
				website: 'https://https://srwebstudio.com',
				position: 'Web Developer',
				date: 'Jan 2020 - Present',
				workingAreas: [
					'Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern',
					'Helped solidify a brand direction for blistabloc that spans both packaging and web',
					'Interfaced with clients on a weekly basis, providing technological expertise'
				]
			}
		]
	},
	featuredProjects: {
		title: 'Some Things I’ve Built',
		projects: [
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
				github: 'github.com',
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
				github: 'github.com',
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
				github: 'github.com',
				technologies: ['React', 'Express', 'Spotify API', 'Styled Components']
			}
		]
	},
	noteworthyProjects: {
		title: 'Other Noteworthy Projects',
		viewAchiveLink: {
			label: 'View the archive',
			url: '/#work'
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
				url: 'test',
				github: 'test',
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
				url: 'test',
				github: 'test',
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
				url: 'test',
				github: 'test',
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
				url: 'test',
				github: 'test',
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
				url: 'test',
				github: 'test',
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
				url: 'test',
				github: 'test',
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
				link: 'https://www.facebook.com/robel.mengistu.9',
				icon: Facebook
			},
			{
				link: '',
				icon: Github
			},
			{
				link: '',
				icon: Instagram
			},
			{
				link: '',
				icon: Linkedin
			},
			{
				link: '',
				icon: Twitter
			},
			{
				link: '',
				icon: Whatsapp
			}
		],
		buttonLabel: 'Send Email'
	}
};

export const layoutData: ILayoutData = {
	header: {
		navItems: [
			{
				label: 'About',
				url: '/#about'
			},
			{
				label: 'Experience',
				url: '/#experience'
			},
			{
				label: 'Work',
				url: '/#work'
			},
			{
				label: 'contact',
				url: '/#contact'
			},
			{
				label: 'Resume',
				url: ''
			}
		]
	},
	footer: 'Designed & coded with 💙 by Mohammad Robel'
};
