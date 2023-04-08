<script>
	import ExternalLink from './Svg/ExternalLink.svelte';
	import Github from './Svg/Github.svelte';
	import Image1 from '$lib/images/halcyon.avif';
	import Image2 from '$lib/images/demo.avif';
	import Image3 from '$lib/images/course-card.avif';

	const projects = [
		{
			tag: 'Featured Project',
			name: 'Halcyon Theme',
			description:
				'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
			image: Image1,
			url: '#!',
			github: '#!',
			tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper']
		},
		{
			tag: 'Featured Project',
			name: 'Spotify Profile',
			description:
				'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
			image: Image2,
			url: '#!',
			github: '#!',
			tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku']
		},
		{
			tag: 'Featured Project',
			name: 'Build a Spotify Connected App',
			description:
				"Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
			image: Image3,
			url: '#!',
			github: '#!',
			tech: ['React', 'Express', 'Spotify API', 'Styled Components']
		}
	];
</script>

<section class="custom-container section-py">
	<h2
		class="mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)] text-lightest-slate"
	>
		<span class="text-2xl text-green">03.</span>
		<span
			class="relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[70px] after:bg-lightest-navy after:lg:w-[300px]"
			>Some Things I’ve Built</span
		>
	</h2>

	<div class="flex items-start justify-start space-x-4">
		<div class=" mb-8 space-y-8 md:space-y-16">
			{#each projects as item, i}
				<div class="relative w-full shadow-xl lg:shadow-none">
					<div
						class={'absolute top-0 left-0 z-[-1] h-full w-full justify-center lg:flex lg:w-[55%] ' +
							((i + 1) % 2 !== 0 ? '' : 'lg:right-0 lg:left-auto')}
					>
						<img
							src={item.image}
							alt=""
							class="h-full w-full object-cover object-center lg:h-auto lg:object-contain"
						/>
					</div>

					<div
						class={'relative bg-navy bg-opacity-90 p-6 py-16 md:px-10 lg:w-[55%] lg:bg-transparent lg:py-4 ' +
							((i + 1) % 2 === 0 ? '' : 'ml-auto lg:text-right')}
					>
						<p class="mb-2.5 font-mono text-[13px] text-green">{item.tag}</p>
						<h3 class="mb-2.5 text-[clamp(24px,_5vw,_28px)] text-white lg:mb-5">{item.name}</h3>
						<p class="rounded py-5 text-base text-light-slate lg:bg-light-navy lg:p-6">
							{item.description}
						</p>

						<ul
							class={'flex flex-wrap justify-start lg:mt-6 ' +
								((i + 1) % 2 === 0 ? '' : 'lg:justify-end')}
						>
							{#each item.tech as tech}
								<li class="mr-2.5 mb-1 text-[13px] font-medium text-light-slate last-of-type:mr-0">
									{tech}
								</li>
							{/each}
						</ul>

						<div
							class={'mt-5 flex items-center justify-start space-x-6 ' +
								((i + 1) % 2 === 0 ? '' : 'lg:justify-end')}
						>
							<a href={item.github} class="custom-transition text-light-slate hover:text-green">
								<Github className="h-5 w-5" />
							</a>
							<a href={item.url} class="custom-transition text-light-slate hover:text-green">
								<ExternalLink className="h-5 w-5" />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
