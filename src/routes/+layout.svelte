<script lang="ts">
	import '$lib/css/tailwind.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import { layoutData } from '$lib/data';
</script>

<!-- <Header data={layoutData.header} /> -->
<slot />
<Footer data={layoutData.footer} />
