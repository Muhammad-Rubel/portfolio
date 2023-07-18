<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/css/tailwind.css';
</script>

<Header />
<slot />
<Footer />
