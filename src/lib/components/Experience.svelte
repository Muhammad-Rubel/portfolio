<script lang="ts">
	import type { IExperience } from '$lib/types';

	export let data: IExperience;

	let activeExperience = 0;
</script>

<section id="experience" class="section-py mx-auto max-w-[700px] px-6">
	<h2
		class="mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)] text-lightest-slate"
	>
		<span class="text-2xl text-green">02.</span>
		<span
			class="relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[70px] after:bg-lightest-navy after:lg:w-[300px]"
		>
			{data.title}
		</span>
	</h2>

	<div class="items-start justify-start md:flex md:space-x-4">
		<div class="mb-8">
			{#each data.experiences as item, i}
				<button
					class={'whitespace-nowrap border-b-2 px-4 py-2 text-[13px] md:border-l-2 md:border-b-0 ' +
						(activeExperience === i ? 'border-green text-green' : 'border-lightest-navy')}
					on:click={() => {
						activeExperience = i;
					}}
				>
					{item.company}
				</button>
			{/each}
		</div>

		<div class="py-2.5 px-1 md:py-0">
			<h3 class="mb-0.5 text-[22px] font-medium text-lightest-slate">
				{data?.experiences?.[activeExperience]?.position}
				<a
					href={data?.experiences?.[activeExperience]?.website}
					target="_blank"
					class="text-green underline-offset-2 hover:underline"
				>
					@ {data?.experiences?.[activeExperience]?.company}
				</a>
			</h3>

			<p class="mt-2 font-mono text-[13px]">{data?.experiences?.[activeExperience]?.date}</p>

			<ul class="mt-6 space-y-2.5">
				{#each data?.experiences?.[activeExperience]?.workingAreas as area}
					<li class="relative pl-7 text-base">
						<span class="absolute top-0 left-0 text-green">▹</span>
						{area}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
