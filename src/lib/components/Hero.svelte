<script lang="ts">
	import type { IHero } from '$lib/types';

	export let data: IHero;
</script>

<section id="home" class="custom-container flex h-screen items-center justify-center">
	<div>
		<h2 class="mb-2 text-[clamp(14px,_5vw,_16px)] text-green">{data.topTitle}</h2>
		<h2 class="big-heading font-semibold leading-[1.1] text-lightest-slate">{data.name}</h2>
		<h1 class="big-heading font-semibold leading-[1.25] text-slate">{data.subtitle}</h1>
		<p class="mt-5 max-w-[540px] text-lg leading-[1.5]">{data.description}</p>

		<a
			href={data.myWorkbtn.url}
			aria-label="link to {data.myWorkbtn.label}"
			class="btn-primary mt-12 inline-block">{data.myWorkbtn.label}</a
		>
	</div>
</section>
