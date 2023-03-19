<script lang="ts">
	import Logo from './Svg/Logo.svelte';
	import Menu from './Svg/Menu.svelte';

	const navItems = [
		{
			label: 'About',
			url: '/#about'
		},
		{
			label: 'Experience',
			url: '/#experience'
		},
		{
			label: 'Work',
			url: '/#work'
		},
		{
			label: 'contact',
			url: '/#contact'
		},
		{
			label: 'Resume',
			url: '/resume.pdf'
		}
	];
</script>

<header class="fixed top-0 left-0 z-40 w-screen bg-navy">
	<div class="custom-container flex items-center justify-between py-5">
		<a href="/">
			<Logo className="h-10 w-10 text-green" />
		</a>

		<nav class="hidden items-center justify-end lg:flex">
			{#each navItems as item, i}
				<a
					href={item.url}
					class="last-of-type:btn-primary custom-transition p-2.5 text-base last-of-type:ml-4 hover:last-of-type:bg-green-tint"
				>
					<span class="text-sm text-green">0{i + 1}.</span>
					<span>{item.label}</span>
				</a>
			{/each}
		</nav>

		<button class="p-1 lg:hidden">
			<Menu className="h-8 w-8 text-green" />
		</button>
	</div>
</header>
