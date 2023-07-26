<script lang="ts">
	import type { INoteworthyProjects } from '$lib/types';

	import ExternalLink from './Svg/ExternalLink.svelte';
	import Github from './Svg/Github.svelte';
	import Folder from './Svg/Folder.svelte';

	export let data: INoteworthyProjects;
</script>

<section id="otherWorks" class="custom-container section-py">
	<h2 class="mb-2.5 text-center text-[clamp(24px,5vw,32px)] text-lightest-slate">
		{data.title}
	</h2>

	<!-- href={data.viewAchiveLink.url} -->
	<a
		href=""
		aria-label="link to {data.viewAchiveLink.label}"
		class="text-center font-mono text-sm text-green hover:underline"
	>
		{data.viewAchiveLink.label}
	</a>

	<!-- projects -->
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data?.projects as item, i}
			<div class="bg-lightest-navy py-8 px-7 ">
				<!-- icons -->
				<div>
					<div>
						<Folder className="h-10 w-10 text-green" />
					</div>

					<div class="flex items-center justify-end space-x-4">
						<!-- item.github -->
						<a href={item.github} class="custom-transition text-light-slate hover:text-green">
							<Github className="h-5 w-5" />
						</a>
						<!-- {item.url} -->
						<a href={item.url} class="custom-transition text-light-slate hover:text-green">
							<ExternalLink className="h-5 w-5" />
						</a>
					</div>
				</div>

				<h3
					class="custom-transition mb-2.5 text-[22px] font-semibold text-light-slate hover:text-green"
				>
					<!-- {item.url} -->
					<a href={item.url}>{item.name}</a>
				</h3>

				<p class="font-light-slate text-base">{item.description}</p>

				<ul class="flex flex-wrap justify-start lg:mt-6 ">
					{#each item.technologies as tech}
						<li class="mr-2.5 mb-1 text-[13px] font-medium text-light-slate last-of-type:mr-0">
							{tech}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
