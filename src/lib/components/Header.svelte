<script lang="ts">
	import type { IHeader } from '$lib/types';
	import Logo from './Svg/Logo.svelte';
	import Menu from './Svg/Menu.svelte';

	export let data: IHeader;
</script>

<header class="fixed top-0 left-0 z-40 w-screen bg-navy">
	<div class="custom-container flex items-center justify-between py-5">
		<!-- logo -->
		<a href="" class="relative">
			<Logo className="h-10 w-10 text-green" />
			<span
				class="absolute top-1/2 left-1/2 mt-[1px] -translate-x-1/2 -translate-y-1/2 transform font-fira text-green"
				>R</span
			>
		</a>

		<!-- nav items -->
		<!-- <nav class="hidden items-center justify-end lg:flex">
			{#each data.navItems as item, i}
				<a
					href=""
					aria-label="link to {item.label}"
					class="custom-transition group p-2.5 text-base hover:text-green"
				>
					<span class="text-sm text-green">0{i + 1}.</span>
					<span>{item.label}</span>
				</a>
			{/each}
		</nav> -->

		<!-- mobile menu button -->
		<!-- <button class="p-1 lg:hidden">
			<Menu className="h-8 w-8 text-green" />
		</button> -->
	</div>
</header>
