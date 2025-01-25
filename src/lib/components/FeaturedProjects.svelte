<script lang="ts">
	import type { IFeaturedProjects } from '$lib/types';

	import Github from './Svg/Github.svelte';
	import { projects } from '$lib/data/projects';
	import ExternalLink from './Svg/ExternalLink.svelte';

	export let data: IFeaturedProjects;
</script>

<section id="work" class="custom-container section-py">
	<!-- title -->
	<h2
		class="mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)] text-lightest-slate"
	>
		<span class="text-2xl text-green">03.</span>
		<span
			class="relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[70px] after:bg-lightest-navy after:lg:w-[300px]"
		>
			{data.title}
		</span>
	</h2>

	<!-- projects -->
	<div class="flex items-start justify-start space-x-4">
		<div class=" mb-8 space-y-8 md:space-y-20">
			{#each projects.filter((item) => item.tag === 'Featured') as item, i}
				<div class="relative w-full shadow-xl lg:shadow-none">
					<div
						class={'absolute top-0 left-0 z-[-1] h-full w-full justify-center lg:flex lg:w-[55%] ' +
							((i + 1) % 2 !== 0 ? '' : 'lg:right-0 lg:left-auto')}
					>
						<img
							src={item.image.src}
							alt={item.image.alt}
							class="h-full w-full rounded object-cover object-center bg-blend-color-dodge lg:h-auto"
						/>

						<span class="absolute top-0 left-0 z-0 h-full w-full bg-navy bg-opacity-30" />
					</div>

					<div
						class={'relative bg-navy bg-opacity-90 p-6 py-16 md:px-10 lg:w-[55%] lg:bg-transparent lg:py-4 ' +
							((i + 1) % 2 === 0 ? '' : 'ml-auto lg:text-right')}
					>
						<p class="mb-2.5 font-mono text-[13px] text-green">{item.tag}</p>

						<h3 class="mb-2.5 text-[clamp(24px,_5vw,_28px)] text-white lg:mb-5">
							<a
								href={item.url}
								aria-label="link to {item.name}"
								target="_blank"
								class="custom-transition  hover:text-green"
							>
								{item.name}
							</a>
						</h3>

						<p class="mb-2.5 font-mono text-[13px]">Made at: {item.madeAt}</p>
						<p class="rounded py-5 text-base text-light-slate lg:bg-light-navy lg:p-6">
							<span class="line-clamp-6">
								{item.description}
							</span>
						</p>

						<ul
							class={'flex flex-wrap justify-start lg:mt-6 ' +
								((i + 1) % 2 === 0 ? '' : 'lg:justify-end')}
						>
							{#each item.technologies as tech}
								<li
									class="mr-1.5 mb-1 rounded-full bg-green-tint px-3 text-[13px] font-medium text-green/80 last-of-type:mr-0"
								>
									{tech}
								</li>
							{/each}
						</ul>

						<div
							class={'mt-5 flex items-center justify-start space-x-6 ' +
								((i + 1) % 2 === 0 ? '' : 'lg:justify-end')}
						>
							<!-- {item.github} -->
							<a
								href={item.github}
								aria-label="link to github"
								target="_blank"
								class="custom-transition text-light-slate hover:text-green"
							>
								<Github className="h-5 w-5" />
							</a>

							<!-- {item.url} -->
							<a
								href={item.url}
								aria-label="link to {item.name}"
								target="_blank"
								class="custom-transition text-light-slate hover:text-green"
							>
								<ExternalLink className="h-5 w-5" />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
