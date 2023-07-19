<script>
	import ExternalLink from './Svg/ExternalLink.svelte';
	import Github from './Svg/Github.svelte';
	import Image1 from '$lib/images/halcyon.avif';
	import Image2 from '$lib/images/demo.avif';
	import Image3 from '$lib/images/course-card.avif';
	import Folder from './Svg/Folder.svelte';

	const projects = [
		{
			tag: 'Featured Project',
			name: 'Halcyon Theme',
			description:
				'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace',
			image: Image1,
			url: 'test',
			github: 'test',
			tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper']
		},
		{
			tag: 'Featured Project',
			name: 'Spotify Profile',
			description:
				'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
			image: Image2,
			url: 'test',
			github: 'test',
			tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku']
		},
		{
			tag: 'Featured Project',
			name: 'Build a Spotify Connected App',
			description:
				"Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
			image: Image3,
			url: 'test',
			github: 'test',
			tech: ['React', 'Express', 'Spotify API', 'Styled Components']
		},
		{
			tag: 'Featured Project',
			name: 'Halcyon Theme',
			description:
				'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
			image: Image1,
			url: 'test',
			github: 'test',
			tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper']
		},
		{
			tag: 'Featured Project',
			name: 'Spotify Profile',
			description:
				'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
			image: Image2,
			url: 'test',
			github: 'test',
			tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku']
		},
		{
			tag: 'Featured Project',
			name: 'Build a Spotify Connected App',
			description:
				"Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
			image: Image3,
			url: 'test',
			github: 'test',
			tech: ['React', 'Express', 'Spotify API', 'Styled Components']
		}
	];
</script>

<section id="otherWorks" class="custom-container section-py">
	<h2 class="mb-2.5 text-center text-[clamp(24px,5vw,32px)] text-lightest-slate">
		Other Noteworthy Projects
	</h2>

	<a href="test" class="text-center font-mono text-sm text-green hover:underline"
		>view the archive</a
	>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as item, i}
			<div class="bg-lightest-navy py-8 px-7 ">
				<!-- icons -->
				<div>
					<div>
						<Folder className="h-10 w-10 text-green" />
					</div>

					<div class="flex items-center justify-end space-x-4">
						<a href={item.github} class="custom-transition text-light-slate hover:text-green">
							<Github className="h-5 w-5" />
						</a>
						<a href={item.url} class="custom-transition text-light-slate hover:text-green">
							<ExternalLink className="h-5 w-5" />
						</a>
					</div>
				</div>

				<h3
					class="custom-transition mb-2.5 text-[22px] font-semibold text-light-slate hover:text-green"
				>
					<a href={item.url}>{item.name}</a>
				</h3>

				<p class="font-light-slate text-base">{item.description}</p>

				<ul class="flex flex-wrap justify-start lg:mt-6 ">
					{#each item.tech as tech}
						<li class="mr-2.5 mb-1 text-[13px] font-medium text-light-slate last-of-type:mr-0">
							{tech}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
