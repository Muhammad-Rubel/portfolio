import Aaronnbrock from '$lib/images/porjects/aaronbrock.com.png';
import Bonabotse from '$lib/images/porjects/bonabotse.co.za.png';
import Drberg from '$lib/images/porjects/drberg.com.png';
import Syself from '$lib/images/porjects/syself.com.png';
import Visitpatagonia from '$lib/images/porjects/visitpatagonia.png';

export const projects = [
	{
		tag: 'Featured',
		name: 'Dr. Berg Website',
		description:
			"Dr. Berg's Health Products and Keto Diet Website is a comprehensive platform that offers a wide range of health products, valuable insights on the keto diet, and information on various health issues. Developed with SvelteKit, Typescript, and Tailwind CSS, the website delivers a seamless and informative user experience.",
		// The project's primary objective was to create an all-encompassing website that provides users with a holistic approach to health and wellness. The Dr. Berg's Health Products and Keto Diet Website exemplifies your expertise in creating an encompassing and dynamic web platform. By skillfully integrating SvelteKit, Typescript, Tailwind CSS, and APIs, you've crafted a website that provides valuable health insights, a diverse range of products, and interactive BMI calculators to support users' health and wellness journeys. This project showcases your dedication to building user-friendly and informative web experiences that contribute to a healthier lifestyle
		image: {
			alt: 'Dr. Berg Website',
			src: Drberg
		},
		url: 'https://www.drberg.com',
		github: 'https://github.com/Muhammad-Rubel',
		madeAt: 'SR Web Studio',
		technologies: ['SvelteKit', 'TailwindCSS', 'TypeScript']
	},
	{
		tag: 'Featured',
		name: 'Syself Website',
		description:
			'Syself is the leading modern European cloud infrastructure service provider, offering cutting-edge solutions to businesses and individuals. The Syself website, developed with SvelteKit, Typescript, and Tailwind CSS, With a focus on modern UI design, responsiveness, and a powerful calculator tool.',
		image: {
			alt: 'Syself Website',
			src: Syself
		},
		url: 'https://syself.com',
		github: 'https://github.com/Muhammad-Rubel',
		madeAt: 'Fiverr',
		technologies: ['SvelteKit', 'TailwindCSS', 'TypeScript']
	},
	{
		tag: 'Featured',
		name: 'Visit Patagonia Website',
		description:
			'The Visit Patagonia Website is a comprehensive platform that offers a wide range of travel packages and information on various tourist destinations in Patagonia. Developed with Nuxt.js, Typescript, and Tailwind CSS, the website delivers a seamless and informative user experience.',
		image: {
			alt: 'Visit Patagonia Website',
			src: Visitpatagonia
		},
		url: 'https://visitpatagonia.com.ar/en',
		github: 'https://github.com/Muhammad-Rubel',
		madeAt: 'SR Web Studio',
		technologies: ['Nuxt.js', 'TailwindCSS', 'TypeScript', 'Strapi']
	},
	{
		tag: 'Featured',
		name: 'Aaron N Brock Portfolio',
		description:
			"The Aaron N. Brock Portfolio Website is a visually stunning showcase of the client's work and accomplishments. Built with cutting-edge technologies, including SvelteKit, Typescript, and Tailwind CSS. One of the standout features of the website is the captivating SVG animations that bring life to the user interface.",
		// The challenge of implementing background blob SVGs was masterfully conquered, creating a unique and eye-catching backdrop that complements the overall design.
		image: {
			alt: 'Aaron N Brock Portfolio',
			src: Aaronnbrock
		},
		url: 'https://aaronnbrock.com',
		github: 'https://github.com/Muhammad-Rubel',
		madeAt: 'Fiverr',
		technologies: ['SvelteKit', 'TailwindCSS', 'TypeScript', 'Blob SVGs']
	},
	{
		tag: 'Featured',
		name: 'Bona Botse Website',
		description:
			'The Bona Botse Motivation and Mind Freshness Training Website is an inspiring platform dedicated to offering top-notch training and coaching services in motivation and mental well-being. Built with SvelteKit, Typescript, and Tailwind CSS. The main difficult task here was to create a responsive and interactive UI.',
		// the website delivers a seamless user experience and a visually captivating interface. The project's main objective was to create an empowering website that effectively communicates the importance of motivation and maintaining a fresh and positive mindset.
		image: {
			alt: 'Bona Botse Website',
			src: Bonabotse
		},
		url: 'https://bonabotse.co.za',
		github: 'https://github.com/Muhammad-Rubel',
		madeAt: 'Fiverr',
		technologies: ['SvelteKit', 'TailwindCSS', 'TypeScript']
	}
];

// I am a web developer
// Mainly frontend and api integration is my area
// recently I build a portfolio website for me. I want to show my previous works there. Thats why I need your help
// would you like to write some project description for me? I will share project details icluding link, technologies I have used to built these website etc
// https://aaronnbrock.com this is a portfolio website for a client. I have built using SvelteKit, Typescript, Tailwind css. svg animation and background blob svgs are the difficult tasks here
// https://bonabotse.co.za. SvelteKit, Typescript, Tailwind css. Difficult UI design, respornsiveness, animations are the key points
// sorry bonabotse offers taining on "motivation and mind freshness"
