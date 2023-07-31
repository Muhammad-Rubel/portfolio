export interface ILink {
	label: string;
	url: string;
}

export interface IImage {
	alt: string;
	src: any;
}

export interface IHeader {
	navItems: ILink[];
}

export interface IHero {
	topTitle: string;
	name: string;
	subtitle: string;
	description: string;
	email: ILink;
}

export interface IAbout {
	title: string;
	image: IImage;
	description: string[];
	expertiseAreas: ILink[];
}

export interface IExperience {
	title: string;
	experiences: IExperienceItem[];
}

export interface IExperienceItem {
	company: string;
	website: string;
	position: string;
	date: string;
	workingAreas: string[];
}

export interface IFeaturedProjects {
	title: string;
	projects?: IProject[];
}

export interface IProject {
	tag: string;
	name: string;
	description: string;
	image: IImage;
	url: string;
	github: string;
	madeAt?: string;
	workedOn?: string[]; // Frontend, Backend, API integration, CMS etc.
	technologies: string[];
}

export interface INoteworthyProjects {
	title: string;
	viewAchiveLink: ILink;
	projects: IProject[];
}

export interface IContact {
	title: string;
	description: string;
	formTitle: string;
	socialMediaTitle: string;
	socialMedia: ISocialMediaLink[];
	buttonLabel: string;
}

export interface ISocialMediaLink {
	link: string;
	icon: any;
}

export interface IHomepageData {
	hero: IHero;
	about: IAbout;
	experience: IExperience;
	featuredProjects: IFeaturedProjects;
	noteworthyProjects: INoteworthyProjects;
	contact: IContact;
}

export interface ILayoutData {
	header: IHeader;
	footer: string;
}
