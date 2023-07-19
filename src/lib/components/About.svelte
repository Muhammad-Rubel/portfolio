<script lang="ts">
	import type { IAbout } from '$lib/types';

	export let data: IAbout;
</script>

<section id="about" class="custom-container section-py">
	<h2 class="mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)]">
		<span class="text-2xl text-green">01.</span>
		<span
			class="relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[150px] after:bg-lightest-navy after:lg:w-[300px]"
		>
			{data.title}
		</span>
	</h2>

	<div class="items-start justify-between lg:flex lg:space-x-10">
		<div class="lg:w-3/5">
			{#each data.description as item}
				<p class="mb-4 text-lg">
					{item}
				</p>
			{/each}

			<ul class="mt-5 grid grid-cols-2 gap-2">
				{#each data.expertiseAreas as item}
					<a
						href={item.url}
						target="_blank"
						class="custom-transition w-max text-base hover:text-green"
					>
						<span class="text-green"> ▹ </span>
						<span>{item.label}</span>
					</a>
				{/each}
			</ul>
		</div>

		<div class="mt-12 flex justify-center lg:mt-0 lg:w-2/5">
			<div class="group relative h-60 w-48 rounded md:h-64 md:w-52 lg:h-[370px] lg:w-[300px]">
				<img
					src={data?.image?.src}
					alt={data?.image?.alt}
					class="h-full w-full rounded object-cover object-center"
				/>

				<span
					class="absolute top-5 left-5 z-[-1] h-full w-full rounded border-2 border-green transition-all duration-300 ease-in-out group-hover:top-3 group-hover:left-3"
				/>
			</div>
		</div>
	</div>
</section>
